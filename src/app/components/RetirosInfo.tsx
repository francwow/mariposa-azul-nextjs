"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import { RetirosItems } from "../_data/RetirosItems";
import Flowers from "./Flowers";
import Icon from "./GoogleIcon";
import SpecialCTA from "./SpecialCTA";

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
              <div className="info retiros-desc">
                {/* <h2>{language === "ES" ? item.textES : item.textEN}</h2> */}
                <p>{language === "ES" ? item.contDescES : item.contDescEN}</p>
              </div>
              <div className="info retiros-collage">
                {item.collage.map((img, index) => {
                  return (
                    <div key={index} className="img-container">
                      <Image
                        src={img.src}
                        alt="Imagen de retiro de Mariposa Azul"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                  );
                })}
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
                {/* <div className="retiros-tematico-divider"></div> */}
                <div className="info-container">
                  <div className="retiros-info-overlay"></div>
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
                              <div className="info-item" key={j}>
                                <Icon icon="arrow_forward_ios" />
                                <li>{contItem}</li>
                              </div>
                            );
                          })
                        : item.contTemEN.map((contItem, j) => {
                            return (
                              <div className="info-item" key={j}>
                                <Icon icon="arrow_forward_ios" />
                                <li>{contItem}</li>
                              </div>
                            );
                          })}
                    </ul>
                  </div>
                </div>
                <div className="retiros-cta info">
                  <SpecialCTA item={item} />
                </div>
              </div>
            </div>
            <div className="info-container">
              <Flowers number={2} />
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
          </div>
        ) : null;
      })}
    </section>
  );
};

export default RetirosInfo;
