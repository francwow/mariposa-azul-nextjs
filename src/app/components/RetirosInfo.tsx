"use client";

import { useLanguage } from "../contexts/ContextHooks";
import { RetirosItems } from "../data/RetirosItems";
import MainBtn from "./MainBtn";

type RetirosInfoProps = {
  id: string;
};

const RetirosInfo = ({ id }: RetirosInfoProps) => {
  const { language } = useLanguage();

  return (
    <section className="retiros-info-section content-section">
      {RetirosItems.map((item, i) => {
        return id === item.id ? (
          <div className="info-wrapper" key={i}>
            <div className="info-container">
              <div className="info">
                <h2>{language === "ES" ? item.textES : item.textEN}</h2>
                <p>{language === "ES" ? item.contDescES : item.contDescEN}</p>
              </div>
            </div>
            <div className="info-container">
              <div
                style={{
                  background: `url("${item.infoImg.src}")`,
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="retiros-info-tematico"
              >
                <div className="retiros-tematico-overlay"></div>
                <div className="info-heading">
                  <h2>
                    {language === "ES"
                      ? "Contenido Temático"
                      : "Thematic Content"}
                  </h2>
                </div>
                <div className="info-text">
                  <ul className="info-items">
                    {language === "ES"
                      ? item.contTemES.map((contItem, j) => {
                          return (
                            <li className="info-item" key={j}>
                              {contItem}
                            </li>
                          );
                        })
                      : item.contTemEN.map((contItem, j) => {
                          return (
                            <li className="info-item" key={j}>
                              {contItem}
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="info-container">
              <div className="info-text">
                <div className="info-heading">
                  <h2>
                    {language === "ES" ? "Facilitadores" : "Facilitators"}
                  </h2>
                </div>
                <div className="info-text">
                  {item.facilitadores.map((contItem, i) => {
                    return (
                      <div key={i} className="info">
                        <h3>{contItem.name}</h3>
                        <p>
                          {language === "ES"
                            ? contItem.textES
                            : contItem.textEN}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="retiros-cta info">
              <div className="info-cta">
                <p>
                  {language === "ES"
                    ? `Inversión: ${item.priceES}`
                    : `Investment: ${item.priceEN}`}
                </p>
                <MainBtn href={item.ctaHref} bgColor="white" target>
                  {language === "ES" ? "inscríbete ahora" : "sign up now"}
                </MainBtn>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </section>
  );
};

export default RetirosInfo;
