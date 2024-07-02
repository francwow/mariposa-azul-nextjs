"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import { PasadiaItems } from "../_data/PasadiaItems";
import InViewEl from "./InView";
import MainBtn from "./MainBtn";

const PasadiaInfo = () => {
  const { language } = useLanguage();

  return (
    <section className="pasadia-info-section content-section">
      <div className="info-container">
        {language === "ES" ? (
          <div className="info-wrapper">
            <div className="pasadia-info">
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <div className="info-text">
                  <h3>
                    Durante un día tendrás la oportunidad de vivir la
                    “Experiencia Mariposa Azul” de forma individual, en pareja o
                    en grupo. Esta experiencia incluye:
                  </h3>
                  <ul className="pasadia-items">
                    <li>Circulo de apertura e intención y Oráculo</li>
                    <li>
                      Reconocimiento del territorio e inmersión en río / cascada
                    </li>
                    <li>
                      Sesión de meditación con geometría sagrada + Sound healing
                      con cuencos
                    </li>
                    <li>Almuerzo Saludable</li>
                  </ul>
                </div>
              </InViewEl>
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <div className="pasadia-images">
                  {PasadiaItems.map((item, index) => (
                    <div key={index} className="pasadia-img">
                      <Image
                        src={item.imgSrc.src}
                        alt={item.altES}
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </div>
              </InViewEl>
            </div>
            <div className="pasadia-cta">
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <div className="info-text">
                  <h3>
                    Si deseas incluir alguna terapia alternativa cuéntanos al
                    momento de contactarnos.
                  </h3>
                </div>
              </InViewEl>
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <MainBtn
                  href="https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
                  target
                  bgColor="green"
                >
                  Más información aquí
                </MainBtn>
              </InViewEl>
            </div>
          </div>
        ) : (
          <div className="info-wrapper">
            <div className="pasadia-info">
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <div className="info-text">
                  <h3>
                    For one day you will have the opportunity to live the
                    “Experience Blue Butterfly” individually, as a couple or in
                    a group. This experience includes:
                  </h3>
                  <ul className="pasadia-items">
                    <li>Circle of opening and intention and Oracle</li>
                    <li>
                      Recognition of the territory and immersion in river /
                      waterfall
                    </li>
                    <li>
                      Meditation session with sacred geometry + Sound healing
                      with bowls
                    </li>
                    <li>Healthy lunch</li>
                  </ul>
                </div>
              </InViewEl>
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <div className="pasadia-images">
                  {PasadiaItems.map((item, index) => (
                    <div key={index} className="pasadia-img">
                      <Image
                        src={item.imgSrc.src}
                        alt={item.altES}
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </div>
              </InViewEl>
            </div>
            <div className="pasadia-cta">
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <div className="info-text">
                  <h3>
                    If you want to include any alternative therapy, please let
                    us know.
                  </h3>
                </div>
              </InViewEl>
              <InViewEl activeClass="info fade-up" notActiveClass="info">
                <MainBtn
                  href="https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
                  target
                  bgColor="green"
                >
                  More info here
                </MainBtn>
              </InViewEl>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PasadiaInfo;
