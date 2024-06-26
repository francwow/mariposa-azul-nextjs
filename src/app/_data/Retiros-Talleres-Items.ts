import { StaticImageData } from "next/image";

// renacimiento
import renacimiento1 from "../../../public/retiros/renacimiento/nacimiento1.webp";
import renacimiento2 from "../../../public/retiros/renacimiento/nacimiento2.webp";
import renacimiento3 from "../../../public/retiros/renacimiento/nacimiento3.webp";
import renacimiento4 from "../../../public/retiros/renacimiento/nacimiento4.webp";
import renacimiento5 from "../../../public/retiros/renacimiento/nacimiento5.webp";
import renacimiento6 from "../../../public/retiros/renacimiento/nacimiento6.webp";

// naturaleza
import naturaleza1 from "../../../public/retiros/naturaleza/naturaleza1.webp";
import naturaleza2 from "../../../public/retiros/naturaleza/naturaleza2.webp";
import naturaleza3 from "../../../public/retiros/naturaleza/naturaleza3.webp";
import naturaleza4 from "../../../public/retiros/naturaleza/naturaleza4.webp";
import naturaleza5 from "../../../public/retiros/naturaleza/naturaleza5.webp";

// tejido
import tejido1 from "../../../public/talleres/tejido/tejido1.webp";
import tejido2 from "../../../public/talleres/tejido/tejido2.webp";
import tejido3 from "../../../public/talleres/tejido/tejido3.webp";
import tejido4 from "../../../public/talleres/tejido/tejido4.webp";
import tejido5 from "../../../public/talleres/tejido/tejido5.webp";
import tejido6 from "../../../public/talleres/tejido/tejido6.webp";

// tambor
import tambor1 from "../../../public/talleres/tambor/tambor1.webp";
import tambor2 from "../../../public/talleres/tambor/tambor2.webp";
import tambor3 from "../../../public/talleres/tambor/tambor3.webp";
import tambor4 from "../../../public/talleres/tambor/tambor4.webp";
import tambor5 from "../../../public/talleres/tambor/tambor5.webp";
import tambor6 from "../../../public/talleres/tambor/tambor6.webp";
import tambor7 from "../../../public/talleres/tambor/tambor7.webp";

export type RetirosItemType = {
  textES: string;
  textEN: string;
  href: string;
  heroImg: StaticImageData;
  infoImg: StaticImageData;
  contDescESOne: string;
  contDescESTwo?: string;
  contDescENOne: string;
  contDescENTwo?: string;
  id: string;
  collage: StaticImageData[];
};

export type TalleresItemType = {
  textES: string;
  textEN: string;
  href: string;
  heroImg: StaticImageData;
  infoImg: StaticImageData;
  contDescESOne: string;
  contDescESTwo?: string;
  contDescENOne: string;
  contDescENTwo?: string;
  id: string;
  collage: StaticImageData[];
};

export const RetirosItems: RetirosItemType[] = [
  {
    textES: "Retiro de Renacimiento",
    textEN: "Rebirth Retreat",
    href: "/retiros/renacimiento",
    id: "renacimiento",
    heroImg: renacimiento1,
    infoImg: renacimiento3,
    contDescESOne: `En este retiro vivencial de Re-Nacimiento te ofrecemos la oportunidad de explorar las creencias limitantes, duelos inconclusos y temas pendientes en tu vida que te impiden alcanzar tu máximo potencial. Aprenderás a identificarlos, gestionarlos y tomar la decisión de dejarlos atrás para finalmente dar un rotundo SÍ a la vida y a tu propia pasión.`,
    contDescENOne: `In this experiential Re-Birth retreat we offer you the opportunity to explore limiting beliefs, unfinished grief and pending issues in your life that prevent you from reaching your maximum potential. You will learn to identify them, manage them and make the decision to leave them behind to finally say a resounding YES to life and your own passion.`,
    collage: [
      renacimiento1,
      renacimiento2,
      renacimiento3,
      renacimiento4,
      renacimiento5,
      renacimiento6,
    ],
  },
  {
    textES: "Retiro conexión con la naturaleza",
    textEN: "Retreat connection with nature",
    href: "/retiros/naturaleza",
    id: "naturaleza",
    heroImg: naturaleza5,
    infoImg: naturaleza4,
    contDescESOne: `En este retiro vivencial conectarás profundamente con tu cuerpo, tus sentidos y tus emociones, a través de la inmersión en el mundo natural combinando diversas prácticas, como constelaciones familiares, respiración consciente y meditación, inmersión en el rio y la cascada, sound healing y así facilitar la liberación de bloqueos emocionales y promover la autenticidad y la plenitud en la vida cotidiana.`,
    contDescENOne: `In this experiential retreat you will connect deeply with your body, your senses and your emotions, through immersion in the natural world combining various practices, such as family constellations, conscious breathing and meditation, immersion in the river and waterfall, sound healing and so on. facilitate the release of emotional blockages and promote authenticity and wholeness in everyday life.`,
    collage: [naturaleza1, naturaleza2, naturaleza3, naturaleza4, naturaleza5],
  },
];

export const TalleresItems: TalleresItemType[] = [
  {
    textES: "Taller Tejiendo en La Naturaleza",
    textEN: "Knitting in Nature Workshop",
    href: "/talleres/tejido",
    id: "tejido",
    heroImg: tejido1,
    infoImg: tejido5,
    contDescESOne:
      "Aprende los principios básicos de la técnica de tejido de macramé en un espacio natural. Regalate un espacio de Inspiración en medio de la naturaleza y reconecta con tu poder creador. Incluye materiales, meditación y sesión de sound healing con cuencos.",
    contDescENOne:
      "Learn the basic principles of the macramé weaving technique in a natural space. Give yourself a space of Inspiration in the middle of nature and reconnect with your creative power. Includes materials, meditation and sound healing session with bowls.",
    collage: [tejido1, tejido2, tejido3, tejido4, tejido5, tejido6],
  },
  {
    textES: "Tambor Ceremonial",
    textEN: "Ceremonial Drum",
    href: "/talleres/tambor-ceremonial",
    id: "tambor-ceremonial",
    heroImg: tambor7,
    infoImg: tambor2,
    contDescESOne: `El taller será un mágico encuentro en el que CADA PARTICIPANTE CONSTRUIRÁ SU PROPIO TAMBOR CON SUS MANOS, ENERGÍA Y PROPÓSITO PERSONAL. Será un momento de introspección, concentración y meditación.`,
    contDescESTwo:
      "El tambor se usa para activar y curar nuestro espíritu, alineando la vibración de nuestro corazón con el de la Madre Tierra. Cada tambor tiene su propio sonido sin igual. Es usado en ceremonias, danzas, canciones, celebraciones, y en la actualidad es usado por diferentes practicantes de Terapia Alternativas y tradiciones de Oriente como el Yoga y Reiki. Así mismo, tendremos un espacio de sensibilización sonora para que aprendas a tocar tu tambor y entrar en estados de profunda meditación entre el latido de tu tambor y el latido de tu corazón.",
    contDescENOne: `The workshop will be a magical encounter in which EACH PARTICIPANT WILL BUILD THEIR OWN DRUM WITH THEIR HANDS, ENERGY AND PERSONAL PURPOSE. It will be a moment of introspection, concentration and meditation.`,
    contDescENTwo:
      "The drum is used to activate and heal our spirit, aligning the vibration of our heart with that of Mother Earth. Each drum has its own unparalleled sound. It is used in ceremonies, dances, songs, celebrations, and is currently used by different practitioners of Alternative Therapy and Eastern traditions such as Yoga and Reiki. Likewise, we will have a sound awareness space for you to learn to play your drum and enter states of deep meditation between the beat of your drum and the beat of your heart.",
    collage: [tambor1, tambor2, tambor3, tambor4, tambor5, tambor6],
  },
];
