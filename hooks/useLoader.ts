"use client";

/**
 * Hook do kontroli globalnego loadera
 * 
 * Użycie:
 * const { show, hide, isLoading } = useLoader();
 * 
 * // Pokaż loader bez wiadomości
 * show();
 * 
 * // Pokaż loader z wiadomością
 * show("Ładuję dane...");
 * 
 * // Ukryj loader
 * hide();
 */

export { useLoader } from "@/contexts/LoaderContext";
