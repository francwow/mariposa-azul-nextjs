"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import { TalleresItems } from "../_data/Retiros-Talleres-Items";
import Flowers from "./Flowers";
import InViewEl from "./InView";

type TalleresInfoProps = {
  id: string;
};

const TalleresInfo = ({ id }: TalleresInfoProps) => {
  const { language } = useLanguage();

  return (
    <section className="retiros-info-section content-section">
      <Flowers number={2} />
      {TalleresItems.map((item, i) => {
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
                  </InViewEl>
                </div>
              ) : (
                <div className="info retiros-desc">
                  <p>
                    {language === "ES"
                      ? item.contDescESOne
                      : item.contDescENOne}
                  </p>
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

export default TalleresInfo;
