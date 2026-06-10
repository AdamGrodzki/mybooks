# 🔄 Globalny Loader - Instrukcja Użytku

## ✨ Funkcje

Kompletny system do zarządzania globalnym loaderem z dobrym UX/UI przy użyciu lucide-react Loader2 spinner.

## 🚀 Użycie

### Podstawowe użycie w komponentach

```typescript
"use client";

import { useLoader } from "@/hooks/useLoader";

export default function MyComponent() {
  const { show, hide, isLoading } = useLoader();

  const handleFetchData = async () => {
    show("Ładuję dane...");
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      // Zrób coś z danymi
    } catch (error) {
      console.error(error);
    } finally {
      hide();
    }
  };

  return (
    <div>
      <button onClick={handleFetchData}>
        {isLoading ? "Ładowanie..." : "Pobierz dane"}
      </button>
    </div>
  );
}
```

### Bez wiadomości

```typescript
const { show, hide } = useLoader();

show(); // Pokazuje loader bez tekstu
hide(); // Ukrywa loader
```

### Z wiadomością

```typescript
const { show, hide } = useLoader();

show("Przetwarzam dane..."); // Pokazuje loader z tekstem
```

## 📁 Struktura plików

```
contexts/
  └── LoaderContext.tsx        # Provider i context
components/ui/
  └── GlobalLoader.tsx         # Komponent loadera
hooks/
  └── useLoader.ts             # Hook dostępu do loadera
app/
  └── layout.tsx               # Zintegrowany LoaderProvider
```

## 🎨 Cechy

- ✅ **Globalny dostęp** - Dostępny z dowolnego komponentu "use client"
- ✅ **Dark Mode Ready** - Czarne tło z blur efektem
- ✅ **Animowany spinner** - Gładka animacja rotacji
- ✅ **Opcjonalny tekst** - Może wyświetlać komunikat ładowania
- ✅ **Z-index 50** - Zawsze na wierzchu
- ✅ **TypeScript** - Pełna obsługa typów

## 💡 Praktyczne przykłady

### Przykład 1: Ładowanie książek

```typescript
"use client";

import { useLoader } from "@/hooks/useLoader";

export function BooksPage() {
  const { show, hide } = useLoader();

  const loadBooks = async () => {
    show("Ładuję książki...");
    try {
      // Fetch API call
      const books = await getBooks();
    } finally {
      hide();
    }
  };

  return <button onClick={loadBooks}>Załaduj</button>;
}
```

### Przykład 2: Formularz z walidacją

```typescript
const { show, hide } = useLoader();

const handleSubmit = async (formData) => {
  show("Zapisuję zmiany...");
  try {
    await saveBook(formData);
  } finally {
    hide();
  }
};
```

## 🎯 Customizacja

Możesz łatwo dostosować wygląd edytując [GlobalLoader.tsx](../components/ui/GlobalLoader.tsx):

- Zmień kolor: `text-white` → inny kolor
- Rozmiar spinner'a: `h-12 w-12` → inny rozmiar
- Intensywność blur'a: `bg-black/40` → `bg-black/50` itp.
- Animację: `animate-spin` → inna animacja
