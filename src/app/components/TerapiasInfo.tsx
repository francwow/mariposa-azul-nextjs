"use client";

import { useLanguage } from "../contexts/ContextHooks";
import { TerapiasItems } from "../data/TerapiasItems";
import MainBtn from "./MainBtn";

type TerapiasInfoProps = {
  id: string;
};

const TerapiasInfo = ({ id }: TerapiasInfoProps) => {
  const { language } = useLanguage();

  return (
    <section className="terapias-info-section content-section">
      {TerapiasItems.map((item, i) => {
        return id === item.id ? (
          <div className="info-wrapper" key={i}>
            <div className="info">
              <h2>{language === "ES" ? item.textES : item.textEN}</h2>
              <p>{language === "ES" ? item.descTextES : item.descTextEN}</p>
            </div>
            <div className="info">
              <div className="info-cta">
                <p>
                  {language === "ES"
                    ? `Sesión virtual o precensial ${item.price} 1 hora`
                    : `Virtual or in-person session ${item.price} 1 hour`}
                </p>
                <MainBtn href={item.ctaHref} bgColor="white" target>
                  {language === "ES" ? "agenda tu cita aquí" : "schedule here"}
                </MainBtn>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </section>
  );
};

export default TerapiasInfo;