# Automatyczne Odświeżanie Danych z Contentful

Ten przewodnik wyjaśnia jak skonfigurować automatyczne odświeżanie strony po zmianach w Contentful.

## 🎯 Jak to działa?

Dodano 2 mechanizmy odświeżania:

### 1. **ISR (Incremental Static Regeneration)** - automatyczne odświeżanie co 60 sekund
   - Strona `/books` automatycznie odświeża dane co minutę
   - Nie wymaga żadnej konfiguracji
   - Działa od razu po wdrożeniu

### 2. **On-Demand Revalidation** - natychmiastowe odświeżanie przez webhooks
   - Contentful wysyła webhook po każdej zmianie
   - Strona odświeża się natychmiast (w ciągu kilku sekund)
   - Wymaga konfiguracji (patrz niżej)

---

## 🔧 Konfiguracja Webhooków (Odświeżanie na żądanie)

### Krok 1: Dodaj zmienną środowiskową w Vercel

1. Wejdź na [Vercel Dashboard](https://vercel.com/dashboard)
2. Wybierz swój projekt **mybooks**
3. Przejdź do **Settings** → **Environment Variables**
4. Dodaj nową zmienną:
   ```
   Name: CONTENTFUL_REVALIDATE_SECRET
   Value: [wygeneruj losowy ciąg znaków, np: abc123xyz789secrettoken]
   ```
5. Wybierz **Production, Preview, Development**
6. Kliknij **Save**

**Jak wygenerować token?**
```bash
# W terminalu:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Lub online: https://generate-secret.vercel.app/32
```

---

### Krok 2: Skonfiguruj Webhook w Contentful

1. Zaloguj się do [Contentful](https://app.contentful.com)
2. Wybierz swój Space
3. Przejdź do **Settings** → **Webhooks**
4. Kliknij **Add Webhook**

#### Wypełnij formularz:

**Name:** `Vercel Revalidation`

**URL:** 
```
https://twoja-domena.vercel.app/api/revalidate
```
*(Zamień `twoja-domena.vercel.app` na swoją domenę Vercel)*

**Headers:**
```
Authorization: Bearer [tu wklej ten sam token co w Vercel]
```

**Triggers (wybierz co ma wywoływać webhook):**
- ✅ Entry: **Publish**
- ✅ Entry: **Unpublish**
- ✅ Entry: **Delete**
- ✅ Asset: **Publish**
- ✅ Asset: **Unpublish**

**Content Type (opcjonalnie - tylko dla książek):**
- Zostaw puste (odświeża wszystko) LUB
- Wybierz `myBooks` (odświeża tylko przy zmianach w książkach)

5. Kliknij **Save**

---

### Krok 3: Testowanie

#### Test 1: Edytuj książkę w Contentful
1. Otwórz dowolną książkę w Contentful
2. Zmień tytuł lub autora
3. Kliknij **Publish**
4. Odśwież stronę `/books` na Vercel
5. Zmiany powinny pojawić się w ciągu 5-10 sekund ✅

#### Test 2: Ręczne wywołanie (opcjonalnie)
```bash
curl -X POST https://twoja-domena.vercel.app/api/revalidate \
  -H "Authorization: Bearer twoj_secret_token" \
  -H "Content-Type: application/json"
```

**Oczekiwana odpowiedź:**
```json
{
  "revalidated": true,
  "now": 1717776000000,
  "message": "Cache cleared successfully"
}
```

---

## 📊 Monitoring Webhooków

### W Contentful:
1. **Settings** → **Webhooks** → Kliknij na swój webhook
2. Zobacz **Activity Log** - pokazuje wszystkie wywołania
3. Sprawdź status (200 = sukces, 401 = błędny token)

### W Vercel:
1. **Deployments** → Wybierz deployment → **Functions**
2. Zobacz logi `/api/revalidate` route

---

## ⚙️ Konfiguracja Zaawansowana

### Zmiana częstotliwości ISR

W pliku `app/books/page.tsx`:
```tsx
// Zmień z 60 na inną wartość (w sekundach)
export const revalidate = 300; // 5 minut
export const revalidate = 0;   // Zawsze dynamiczne (bez cache)
```

### Dodanie webhooków dla innych stron

W `app/api/revalidate/route.ts`:
```tsx
// Dodaj więcej ścieżek do odświeżenia
revalidatePath('/books');
revalidatePath('/authors');
revalidatePath('/categories');
```

---

## 🐛 Troubleshooting

### Problem: Dane się nie odświeżają po zmianie w Contentful

**Sprawdź:**
1. ✅ Czy webhook w Contentful ma status 200 (Activity Log)
2. ✅ Czy `CONTENTFUL_REVALIDATE_SECRET` jest ustawiony w Vercel
3. ✅ Czy token w Contentful i Vercel są identyczne
4. ✅ Czy URL webhooka to `https://` (nie `http://`)
5. ✅ Czy redeploy'owałeś po dodaniu zmiennej środowiskowej

### Problem: Webhook zwraca 401 Unauthorized

- Token w headerze Contentful nie zgadza się z `CONTENTFUL_REVALIDATE_SECRET` w Vercel
- Sprawdź czy format to: `Authorization: Bearer twoj_token` (ze spacją!)

### Problem: Webhook zwraca 404

- URL jest nieprawidłowy
- Sprawdź czy route istnieje: `app/api/revalidate/route.ts`
- Po zmianach w API routes musisz zrobić redeploy na Vercel

---

## 📚 Dodatkowe Zasoby

- [Next.js Revalidation Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- [Contentful Webhooks Docs](https://www.contentful.com/developers/docs/webhooks/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

## ✅ Podsumowanie

Po wykonaniu tych kroków:

✅ **ISR** - Strona odświeża się automatycznie co 60 sekund  
✅ **Webhooks** - Po każdej zmianie w Contentful, strona odświeża się natychmiast  
✅ **Bezpieczeństwo** - Endpoint chroniony tokenem  
✅ **Monitorowanie** - Logi w Contentful i Vercel  

🎉 **Gotowe! Twoje zmiany w Contentful będą widoczne na produkcji w czasie rzeczywistym!**
