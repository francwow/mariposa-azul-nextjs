"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import Flowers from "./Flowers";
import InViewEl from "./InView";
import SomosFundadorasItem from "./SomosFundadorasItem";

const SomosFundadoras = () => {
  const { language } = useLanguage();

  return (
    <section className="somos-fundadoras-section content-section">
      <InViewEl
        activeClass="somos-fundadoras-heading fade-up"
        notActiveClass="somos-fundadoras-heading"
      >
        <h2>{language === "ES" ? "Fundadoras" : "Founders"}</h2>
      </InViewEl>
      <div className="somos-fundadoras-info">
        <SomosFundadorasItem
          h3="Patricia Silva"
          pES="Psicoterapeuta Transpersonal, graduada en Naturismo, Bioneuroemoción y Constelaciones Familiares. Acompaña procesos donde las personas necesitan ser escuchadas y guiadas a otra mirada frente a sus vidas."
          pEN="Transpersonal Psychotherapist, graduated in Naturism, Bioneuroemotion and Family Constellations. “She accompanies processes where people need to be listened to and guided to another perspective on their lives."
          imgSrc="/somos/somos-paty.webp"
          imgAlt="Imagen de Patricia Silva, cofundadora de Mariposa Azul"
        />
        <SomosFundadorasItem
          h3="Maria Camila Pedraza"
          pES="Comunicadora Audiovisual, Músico terapeuta, Tejedora, Fotógrafa, Viajera, enamorada del planeta tierra y todas sus bondades. Al servicio de la vida, gestiona y administra los retiros, talleres y terapias de la Mariposa Azul con el propósito de reconectar a la humanidad con la naturaleza en espacios que involucren la evolución del ser."
          pEN="Audiovisual Communicator, Music Therapist, Weaver, Photographer, Traveler, in love with planet Earth and all its benefits. In the service of life, she manages and administers the Blue Butterfly retreats, workshops and therapies with the purpose of reconnecting humanity with nature in spaces that involve the evolution of the being."
          imgSrc="/somos/somos-cami.webp"
          imgAlt="Imagen de Camila Pedraza, cofundadora de Mariposa Azul"
        />
      </div>
      <Flowers number={2} />
    </section>
  );
};

export default SomosFundadoras;
