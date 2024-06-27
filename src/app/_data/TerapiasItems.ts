import img1 from "../../../public/terapias/terapias-escucha.webp";
import img2 from "../../../public/terapias/terapias-constelaciones.webp";
import img3 from "../../../public/terapias/terapias-duelo.webp";
import img4 from "../../../public/terapias/terapias-biodescodificacion.webp";
import img5 from "../../../public/terapias/listening-1.webp";
import img6 from "../../../public/terapias/constellation-1.webp";
import img7 from "../../../public/terapias/grief-2.webp";
import img8 from "../../../public/terapias/bio-1.webp";
import img9 from "../../../public/terapias/terapias-cuencos.webp";
import img10 from "../../../public/terapias/terapias-geometria.webp";
import img11 from "../../../public/terapias/terapias-masaje.webp";
import img12 from "../../../public/terapias/cuarzo-1.webp";
import img13 from "../../../public/terapias/masaje-1.webp";
import img14 from "../../../public/terapias/geometria-1.webp";
import { StaticImageData } from "next/image";

export type TerapiasItemType = {
  textES: string;
  textEN: string;
  heroImg: StaticImageData;
  infoImg: StaticImageData;
  descTextES: string;
  descTextES2?: string;
  extraItems?: {
    itemsHeadingES: string;
    itemsHeadingEN: string;
    itemsES: string[];
    itemsEN: string[];
  };
  descTextEN: string;
  descTextEN2?: string;
  id: string;
  href: string;
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
    id: "arte-escucha",
    href: "terapias/arte-escucha",
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
    id: "constelaciones",
    href: "terapias/constelaciones",
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
    id: "terapia-duelo",
    href: "terapias/terapia-duelo",
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
    id: "biodescodificacion",
    href: "terapias/biodescodificacion",
  },
  {
    textES: "Sonoterapia con cuencos de cuarzo",
    textEN: "Sonotherapy with quartz bowls",
    heroImg: img9,
    infoImg: img12,
    descTextES: `La sonoterapia actúa a través del sonido y la vibración de instrumentos que emiten altas y a la vez sutiles frecuencias como los cuencos de cuarzo. Pitágoras afirmaba que "cada cuerpo celestial, cada átomo, produce un sonido particular debido a su movimiento, ritmo o vibración. Es más, todos esos sonidos o vibraciones componen una armonía universal en la que cada elemento, sin perder su propia función y carácter, contribuye a la totalidad".`,
    descTextEN: `Sound therapy works through the sound and vibration of instruments that emit high and at the same time subtle frequencies such as quartz bowls. Pythagoras stated that "each celestial body, each atom, produces a particular sound due to its movement, rhythm or vibration. What's more, all these sounds or vibrations make up a universal harmony in which each element, without losing its own function and character, contributes to the whole."`,
    descTextES2:
      "Cada célula y cada órgano de nuestro cuerpo, por tanto, vibran continuamente a una determinada frecuencia. Y así, cuando un órgano está sano, su frecuencia vibratoria está en armonía con el resto del cuerpo, pero si esa frecuencia se altera se rompe la armonía y aparece lo que conocemos como enfermedad. Por lo tanto, exponernos a la alta frecuencia vibratoria de los cuencos, nos permite restaurar el equilibrio de los campos energéticos, recuperar la salud física, etérica y emocional, a la vez que entramos en profundos estados de relajación y descanso.",
    descTextEN2:
      "Each cell and each organ in our body, therefore, continuously vibrates at a certain frequency. And so, when an organ is healthy, its vibratory frequency is in harmony with the rest of the body, but if that frequency is altered, the harmony is broken and what we know as disease appears. Therefore, exposing ourselves to the high vibratory frequency of the bowls allows us to restore the balance of the energy fields, recover physical, etheric and emotional health, while entering deep states of relaxation and rest.",
    extraItems: {
      itemsHeadingES:
        "Entre los beneficios de una sesión de sonoterapia se cuentan:",
      itemsHeadingEN: "Among the benefits of a sound therapy session are:",
      itemsES: [
        "Relajación profunda",
        "Mejor calidad de sueño",
        "Disminución de la ansiedad",
        "Mejor manejo del stress",
        "Tratar dolencias físicas",
        "Equilibrio de centros energéticos",
        "Ayuda a manejar la crisis de pánico",
        "Fortalecimiento del sistema inmunológico",
      ],
      itemsEN: [
        "Deep relaxation",
        "Better sleep quality",
        "Decreased anxiety",
        "Better stress management",
        "Treat physical ailments",
        "Balance of energy centers",
        "Helps manage panic attacks",
        "Strengthening the immune system",
      ],
    },
    id: "sonoterapia",
    href: "terapias/sonoterapia",
  },
  {
    textES: "Terapia con geometría sagrada",
    textEN: "Sacred geometry therapy",
    heroImg: img10,
    infoImg: img14,
    descTextES: `La Geometría Sagrada es una técnica que armoniza tu mente y tu cuerpo mediante figuras geométricas. Durante la sesión armonizamos nuestros patrones mentales y emocionales y obtenemos información que nos permite ser más conscientes y evolucionar. La Geometría Sagrada es el origen de lo que somos, de modo que equilibrarla nos permite reconectar con nuestro Patrón Original y lograr un mayor entendimiento del proceso o procesos por los que estemos pasando en nuestra vida.`,
    descTextEN: `Sacred Geometry is a technique that harmonizes your mind and body through geometric figures. During the session we harmonize our mental and emotional patterns and obtain information that allows us to be more aware and evolve. Sacred Geometry is the origin of who we are, so balancing it allows us to reconnect with our Original Pattern and achieve a greater understanding of the process or processes we are going through in our lives.`,
    descTextES2: `Durante la sesión, a través de la energía enfocada del terapeuta, se armonizan los cuerpos energéticos de la persona que recibe la terapia y se pone en marcha el proceso de equilibrio de la Geometría Sagrada personal, liberando de esta forma patrones y bloqueos energéticos, emocionales y mentales que pueden estar causando anomalías y un funcionamiento poco armónico de la persona.`,
    descTextEN2: `During the session, through the focused energy of the therapist, the energetic bodies of the person receiving the therapy are harmonized and the balancing process of personal Sacred Geometry is launched, thus releasing energetic and emotional patterns and blockages. and mental disorders that may be causing anomalies and poor functioning of the person.`,
    id: "geometria-sagrada",
    href: "terapias/geometria-sagrada",
  },
  {
    textES: "Masaje terapéutico relajante",
    textEN: "Relaxing therapeutic massage",
    heroImg: img11,
    infoImg: img13,
    descTextES: `El masaje terapéutico es un tipo de masaje que se utiliza para tratar dolencias físicas y mentales. Es un enfoque integral de la salud y el bienestar que combina la manipulación manual de los tejidos blandos del cuerpo con técnicas de relajación para ayudar a reducir el estrés y el dolor. El objetivo del masaje terapéutico es ayudar al paciente a alcanzar un estado de equilibrio y relajación.`,
    descTextEN: `Therapeutic massage is a type of massage used to treat physical and mental ailments. It is a comprehensive approach to health and wellness that combines manual manipulation of the body's soft tissues with relaxation techniques to help reduce stress and pain. The goal of therapeutic massage is to help the patient achieve a state of balance and relaxation.`,
    id: "masaje-terapeutico",
    href: "terapias/masaje-terapeutico",
  },
];
