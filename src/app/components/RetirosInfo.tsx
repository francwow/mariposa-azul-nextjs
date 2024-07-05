"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import { RetirosItems } from "../_data/Retiros-Talleres-Items";
import Flowers from "./Flowers";
import InViewEl from "./InView";
import MainBtn from "./MainBtn";

type RetirosInfoProps = {
  id: string;
};

const RetirosInfo = ({ id }: RetirosInfoProps) => {
  const { language } = useLanguage();

  return (
    <section className="retiros-info-section content-section">
      <Flowers number={2} />
      {RetirosItems.map((item, i) => {
        return id === item.id ? (
          <div className="info-wrapper" key={i}>
            <div className="info-container">
              {item.contDescENTwo ? (
                <div className="info retiros-desc">
                  <InViewEl activeClass="fade-up" notActiveClass="">
                    <p>
                      {language === "ES"
                        ? item.contDescESOne
                        : item.contDescENOne}
                    </p>
                  </InViewEl>
                  <InViewEl activeClass="fade-up" notActiveClass="">
                    <p>
                      {language === "ES"
                        ? item.contDescESTwo
                        : item.contDescENTwo}
                    </p>
                    <MainBtn
                      target
                      bgColor="green"
                      href="https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
                    >
                      {language === "ES"
                        ? "Más información aquí"
                        : "More info here"}
                    </MainBtn>
                  </InViewEl>
                </div>
              ) : (
                <div className="info retiros-desc">
                  <p>
                    {language === "ES"
                      ? item.contDescESOne
                      : item.contDescENOne}
                  </p>
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
              )}

              <InViewEl
                activeClass="info retiros-collage fade-in"
                notActiveClass="info retiros-collage"
              >
                {item.collage.map((img, index) => {
                  return (
                    <div key={index} className="img-container">
                      <div className="collage-img-overlay"></div>
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
              </InViewEl>
            </div>
          </div>
        ) : null;
      })}
    </section>
  );
};

export default RetirosInfo;
