"use client";

import { PropsWithChildren, useState } from "react";
import {
  ExtraNavContext,
  LanguageContext,
  NavActiveContext,
} from "../_contexts/ContextHooks";
import { ExtraNavType, LanguageType, NavActiveType } from "../_types/Types";

const Provider = (props: PropsWithChildren) => {
  const [language, setLanguage] = useState<LanguageType>("ES");
  const [navActive, setNavActive] = useState<NavActiveType>(false);
  const [extraNav, setExtraNav] = useState<ExtraNavType>(null);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <NavActiveContext.Provider value={{ navActive, setNavActive }}>
        <ExtraNavContext.Provider value={{ extraNav, setExtraNav }}>
          {props.children}
        </ExtraNavContext.Provider>
      </NavActiveContext.Provider>
    </LanguageContext.Provider>
  );
};

export default Provider;
