"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { useLoader } from "@/contexts/LoaderContext";

export const GlobalLoader: React.FC = () => {
  const { isLoading, message } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-white" strokeWidth={2} />
        {message && <p className="text-white text-lg font-medium animate-pulse">{message}</p>}
      </div>
    </div>
  );
};
