/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/ContextHooks";
import img from "../../../public/inicio/inicio3.webp";

const SomosHero = () => {
  const { language } = useLanguage();

  return (
    <section className="somos-hero-section">
      <div className="somos-overlay"></div>
      <div className="somos-hero-heading">
        <h1>
          {language === "ES"
            ? "Experiencias de bienestar"
            : "Wellness experiences"}
        </h1>
        <h2>{language === "ES" ? "en la naturaleza" : "in nature"}</h2>
      </div>
      <div className="somos-hero-img">
        <Image
          src={img}
          alt="Imagen de un río en La Vega, Colombia"
          width={1920}
          height={1080}
          priority
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default SomosHero;
