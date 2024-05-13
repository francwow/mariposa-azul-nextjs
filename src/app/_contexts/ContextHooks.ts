"use client";

import { createContext, useContext } from "react";
import {
  ExtraNavContextType,
  LanguageContextType,
  NavActiveContextType,
} from "../_types/Types";

export const LanguageContext = createContext<LanguageContextType | null>(null);
export const NavActiveContext = createContext<NavActiveContextType | null>(
  null
);
export const ExtraNavContext = createContext<ExtraNavContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useNav = (): NavActiveContextType => {
  const context = useContext(NavActiveContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useExtraNav = (): ExtraNavContextType => {
  const context = useContext(ExtraNavContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
