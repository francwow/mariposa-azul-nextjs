"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import MainBtn from "./MainBtn";

const SpecialCTA = () => {
  const { language } = useLanguage();

  return (
    <div className="info-cta">
      <MainBtn
        href={
          "https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
        }
        bgColor="white"
        target
      >
        {language === "ES" ? "inscríbete ahora" : "sign up now"}
      </MainBtn>
    </div>
  );
};

export default SpecialCTA;
