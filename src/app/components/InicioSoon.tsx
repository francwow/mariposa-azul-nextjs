import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/ContextHooks";
import SoonItem from "./SoonItem";

const InicioSoon = () => {
  const { language } = useLanguage();
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <div className="inicio-soon">
      <h2
        style={{ opacity: "0" }}
        ref={itemRef}
        className={itemInView ? "fade-up" : ""}
      >
        {language === "ES" ? "Próximos Retiros" : "Upcoming Retreats"}
      </h2>
      <div className="soon-items">
        <SoonItem
          imgSrc="/retiros/proximos/crisalida/crisalida7.webp"
          nameES="Crísalida: Retiro de Renacimiento"
          nameEN="Crísalida: Rebirth Retreat"
          dateES="23 y 24 de Marzo 2024"
          dateEN="23 and 24 of March 2024"
          alt="Imagen de una mariposa a punto de nacer, que representa el renacimiento."
        />
        <SoonItem
          imgSrc="/retiros/proximos/tambor/tambor7.webp"
          nameES="Tambor Ceremonial: Ritual de tejido y sensibilización sonora"
          nameEN="Ceremonial Drum: Weaving ritual and sound awareness"
          dateES="10 y 11 de Abril 2024"
          dateEN="10 and 11 of April 2024"
          alt="Imagen de una mujer tocando un tambor ceremonial."
        />
        <SoonItem
          imgSrc="/retiros/proximos/libre/libre7.webp"
          nameES="Ser Libre: Retiro de Constelación Familiar e Inmersión en Hielo"
          nameEN="Be Free: Family Constellation Retreat and Ice Immersion"
          dateES="20 y 21 de Abril de 2024"
          dateEN="20 and 21 of April 2024"
          alt="Imagen de un bello rio cruzando en medio de un bosque verde."
        />
      </div>
    </div>
  );
};

export default InicioSoon;
