"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface LoaderContextType {
  isLoading: boolean;
  show: (message?: string) => void;
  hide: () => void;
  message: string | null;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const show = useCallback((msg?: string) => {
    setIsLoading(true);
    if (msg) setMessage(msg);
  }, []);

  const hide = useCallback(() => {
    setIsLoading(false);
    setMessage(null);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, show, hide, message }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }
  return context;
};
