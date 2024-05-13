"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import { TerapiasItems } from "../_data/TerapiasItems";
import Flowers from "./Flowers";
import InicioTestimonials from "./InicioTestimonials";
import SpecialCTA from "./SpecialCTA";

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
                <p>{language === "ES" ? item.descTextES : item.descTextEN}</p>
                <SpecialCTA item={item} />
              </div>
              <div className="info-img">
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
          </div>
        ) : null;
      })}
      <InicioTestimonials />
    </section>
  );
};

export default TerapiasInfo;
