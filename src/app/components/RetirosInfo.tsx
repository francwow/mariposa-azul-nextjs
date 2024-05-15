"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import { RetirosItems } from "../_data/RetirosItems";
import Flowers from "./Flowers";
import Icon from "./GoogleIcon";
import SpecialCTA from "./SpecialCTA";
import TransitionArrow from "./TransitionArrow";
import InViewEl from "./InView";

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
                      : item.contDescESTwo}
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
            <TransitionArrow />
            <InViewEl activeClass="info-container fade-in" notActiveClass="">
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
                  <InViewEl
                    activeClass="info-heading fade-up"
                    notActiveClass="info-heading"
                  >
                    <h2>
                      {language === "ES"
                        ? "Contenido Temático"
                        : "Thematic Content"}
                    </h2>
                  </InViewEl>
                  <InViewEl
                    activeClass="info-text fade-right"
                    notActiveClass="info-text"
                  >
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
                  </InViewEl>
                </div>
                <div className="retiros-cta info">
                  <SpecialCTA item={item} />
                </div>
              </div>
            </InViewEl>
            <TransitionArrow />
            <div className="info-container">
              <Flowers number={2} />
              <div className="info-text">
                <InViewEl
                  activeClass="info-heading fade-up"
                  notActiveClass="info-heading"
                >
                  <h2>
                    {language === "ES" ? "Facilitadores" : "Facilitators"}
                  </h2>
                </InViewEl>
                <div className="info-text">
                  {item.facilitadores.map((contItem, i) => {
                    return (
                      <div key={i} className="info">
                        <InViewEl activeClass="fade-up" notActiveClass="">
                          <h3>{contItem.name}</h3>
                          <p>
                            {language === "ES"
                              ? contItem.textES
                              : contItem.textEN}
                          </p>
                        </InViewEl>
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
