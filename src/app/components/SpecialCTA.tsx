"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import MainBtn from "./MainBtn";
import { RetirosItemType } from "../_data/RetirosItems";
import { TerapiasItemType } from "../_data/TerapiasItems";

type SpecialCTAProps = {
  item: RetirosItemType | TerapiasItemType;
};

const SpecialCTA = ({ item }: SpecialCTAProps) => {
  const { language } = useLanguage();

  return (
    <div className="info-cta">
      {language === "ES" ? (
        <p style={{ textAlign: "center" }} className="info-cta-text">
          <span>Inversión: </span>
          <br />
          <span>{item.priceES}</span>
        </p>
      ) : (
        <p style={{ textAlign: "center" }} className="info-cta-text">
          <span>Investment: </span>
          <br />
          <span>{item.priceEN}</span>
        </p>
      )}

      <MainBtn href={item.ctaHref} bgColor="white" target>
        {language === "ES" ? "inscríbete ahora" : "sign up now"}
      </MainBtn>
    </div>
  );
};

export default SpecialCTA;
