"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import { TerapiasItems } from "../_data/TerapiasItems";
import Flowers from "./Flowers";
import MainBtn from "./MainBtn";

type TerapiasInfoProps = {
  id: string;
};

const TerapiasInfo = ({ id }: TerapiasInfoProps) => {
  const { language } = useLanguage();

  return (
    <section className="terapias-info-section content-section">
      <Flowers number={2} />
      {TerapiasItems.map((item, i) => {
        return id === item.id ? (
          <div className="info-wrapper" key={i}>
            <div className="info terapias-desc">
              {/* <h2>{language === "ES" ? item.textES : item.textEN}</h2> */}
              <div className="info-text">
                {item.descTextES2 ? (
                  <>
                    <p>
                      {language === "ES" ? item.descTextES : item.descTextEN}
                    </p>
                    <p>
                      {language === "ES" ? item.descTextES2 : item.descTextEN2}
                    </p>
                  </>
                ) : (
                  <p>{language === "ES" ? item.descTextES : item.descTextEN}</p>
                )}

                <MainBtn
                  target
                  bgColor="green"
                  href="https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
                >
                  {language === "ES"
                    ? "Más información aquí"
                    : "More info here"}
                </MainBtn>
              </div>
              <div className="info-img">
                <div className="info-img-overlay"></div>
                <Image
                  src={item.infoImg}
                  alt="Imagen de terapia de Mariposa Azul"
                  width={800}
                  height={800}
                  priority
                  placeholder="blur"
                />
              </div>
            </div>
            {item.extraItems ? (
              <div className="info terapias-items-container">
                <h3>
                  {language === "ES"
                    ? item.extraItems.itemsHeadingES
                    : item.extraItems.itemsHeadingEN}
                </h3>
                <ul className="terapias-items">
                  {language === "ES"
                    ? item.extraItems.itemsES.map((item, index) => {
                        return (
                          <li key={index} className="terapias-item">
                            {item}
                          </li>
                        );
                      })
                    : item.extraItems.itemsEN.map((item, index) => {
                        return (
                          <li key={index} className="terapias-item">
                            {item}
                          </li>
                        );
                      })}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null;
      })}
    </section>
  );
};

export default TerapiasInfo;
