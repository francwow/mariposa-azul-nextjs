"use client";

import { createContext, useContext } from "react";
import { LanguageContextType } from "../types/Types";

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
