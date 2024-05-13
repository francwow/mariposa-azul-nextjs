export type LanguageType = "ES" | "EN";

export type NavActiveType = boolean;

export type ExtraNavType = string | null | undefined;

export type LanguageContextType = {
  language: LanguageType;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (Language: LanguageType) => void;
};

export type NavActiveContextType = {
  navActive: NavActiveType;
  // eslint-disable-next-line no-unused-vars
  setNavActive: (navActive: NavActiveType) => void;
};

export type ExtraNavContextType = {
  extraNav: ExtraNavType;
  // eslint-disable-next-line no-unused-vars
  setExtraNav: (extraNav: ExtraNavType) => void;
};
