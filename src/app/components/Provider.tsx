"use client";

import { PropsWithChildren, useState } from "react";
import { LanguageContext } from "../contexts/ContextHooks";
import { LanguageType } from "../types/Types";

const Provider = (props: PropsWithChildren) => {
  const [language, setLanguage] = useState<LanguageType>("ES");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default Provider;
