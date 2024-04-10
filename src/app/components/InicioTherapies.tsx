"use client";

import { useLanguage } from "../contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import InfoCard from "./InfoCard";

const InicioTherapies = () => {
  const { language } = useLanguage();
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="inicio-therapies">
      <h2
        style={{ opacity: "0" }}
        ref={itemRef}
        className={itemInView ? "fade-up" : ""}
      >
        {language === "ES"
          ? "Terapias Alternativas Personalizadas"
          : "Personalized Alternative Therapies"}
      </h2>
      <div className="therapies-items">
        <InfoCard
          imgSrc="/terapias/terapias-escucha.webp"
          nameES="El arte de la escuha"
          nameEN="Art of listening"
          alt="Imagen de dos mujeres hablando y sonriendo."
          btnBgColor="white"
        />
        <InfoCard
          imgSrc="/terapias/terapias-constelaciones.webp"
          nameES="Constelaciones familiares"
          nameEN="Family constellations"
          alt="Imagen de personas moviendo piezas de madera en un tablero."
          btnBgColor="white"
        />
        <InfoCard
          imgSrc="/terapias/terapias-duelo.webp"
          nameES="Terapia de duelo"
          nameEN="Grief therapy"
          alt="Imagen de una mujer consolando a otra mujer que llora."
          btnBgColor="white"
        />
        <InfoCard
          imgSrc="/terapias/terapias-biodescodificacion.webp"
          nameES="Biodescodificación"
          nameEN="Biodecoding"
          alt="Imagen de mujeres explicando algo con sus manos."
          btnBgColor="white"
        />
      </div>
    </section>
  );
};

export default InicioTherapies;
