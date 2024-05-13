import img1 from "../../../public/terapias/terapias-escucha.webp";
import img2 from "../../../public/terapias/terapias-constelaciones.webp";
import img3 from "../../../public/terapias/terapias-duelo.webp";
import img4 from "../../../public/terapias/terapias-biodescodificacion.webp";
import img5 from "../../../public/terapias/listening-1.webp";
import img6 from "../../../public/terapias/constellation-1.webp";
import img7 from "../../../public/terapias/grief-2.webp";
import img8 from "../../../public/terapias/bio-1.webp";
import { StaticImageData } from "next/image";

export type TerapiasItemType = {
  textES: string;
  textEN: string;
  heroImg: StaticImageData;
  infoImg: StaticImageData;
  descTextES: string;
  descTextEN: string;
  priceES: string;
  priceEN: string;
  ctaHref: string;
  id: string;
};

export const TerapiasItems: TerapiasItemType[] = [
  {
    textES: "El Arte de La Escucha",
    textEN: "The Art of Listening",
    heroImg: img1,
    infoImg: img5,
    descTextES:
      "Conversaciones sanadoras para liberar y transformar creencias, emociones, sensaciones y pensamientos en un espacio neutral, seguro y contenido.",
    descTextEN:
      "Healing conversations to release and transform beliefs, emotions, sensations and thoughts in a neutral, safe and contained space.",
    priceES: "$120.000 COP",
    priceEN: "$120.000 COP",
    ctaHref: "https://forms.gle/YQfQQ96K3etkDCrp7",
    id: "arte-escucha",
  },
  {
    textES: "Constelaciones Familiares",
    textEN: "Family Constellations",
    heroImg: img2,
    infoImg: img6,
    descTextES: `Las Constelaciones Familiares son una herramienta terapéutica orientada a identificar el tipo de relaciones que se establecen entre los diferentes miembros del sistema familiar.
    El objetivo principal es que la persona pueda identificar las dinámicas perjudiciales inconscientes que se han establecido en su familia y las actitudes y conductas que se han generado entre sus miembros, lo que le permite a la persona reinterpretar los patrones familiares disfuncionales que reproduce de forma inconsciente, para encontrar soluciones a los conflictos y emociones latentes y que pueda gestionarlas y reconciliarse con ciertas personas y eventos del pasado.`,
    descTextEN: `Family Constellations are a therapeutic tool aimed at identifying the type of relationships established between the different members of the family system.
    The main objective is for the person to identify the unconscious harmful dynamics that have been established in their family and the attitudes and behaviors that have been generated among its members, which allows the person to reinterpret the dysfunctional family patterns that they reproduce unconsciously, to find solutions to latent conflicts and emotions so that you can manage them and reconcile with certain people and events from the past.`,
    priceES: "$120.000 COP",
    priceEN: "$120.000 COP",
    ctaHref: "https://forms.gle/YQfQQ96K3etkDCrp7",
    id: "constelaciones",
  },
  {
    textES: "Terapia de Duelo",
    textEN: "Grief Therapy",
    heroImg: img3,
    infoImg: img7,
    descTextES:
      "El duelo es una respuesta natural y necesaria ante situaciones de pérdida. El objetivo de la terapia de duelo es acompañar y guiar el proceso de duelo para que el paciente restablezca el equilibrio emocional gestionando sus emociones y pensamientos de forma saludable.",
    descTextEN:
      "Grief is a natural and necessary response to situations of loss. The objective of grief therapy is to accompany and guide the grieving process so that the patient restores emotional balance by managing their emotions and thoughts in a healthy way.",
    priceES: "$120.000 COP",
    priceEN: "$120.000 COP",
    ctaHref: "https://forms.gle/YQfQQ96K3etkDCrp7",
    id: "terapia-duelo",
  },
  {
    textES: "Biodescodificación",
    textEN: "Biodecoding",
    heroImg: img4,
    infoImg: img8,
    descTextES: `La Biodescodificación es una metodología en la que se abordan las diferentes sintomatologías del cuerpo según cierto significado emocional. El objetivo es identificar el ambiente emocional en el que se originó el estrés, síntoma o enfermedad y aportar recursos para su comprensión y gestión.
    Combina conocimientos propios de la espiritualidad y de la ciencia para acompañar a las personas a transitar situaciones de dificultad.`,
    descTextEN: `Biodecoding is a methodology in which the different symptoms of the body are addressed according to a certain emotional meaning. The objective is to identify the emotional environment in which the stress, symptom or illness originated and provide resources for its understanding and management.
    It combines knowledge of spirituality and science to accompany people through difficult situations.`,
    priceES: "$120.000 COP",
    priceEN: "$120.000 COP",
    ctaHref: "https://forms.gle/YQfQQ96K3etkDCrp7",
    id: "biodescodificacion",
  },
];
