// heroImg & infoImg
import img1 from "../../../public/retiros/proximos/crisalida/crisalida7.webp";
import img2 from "../../../public/retiros/proximos/tambor/tambor7.webp";
import img3 from "../../../public/retiros/proximos/libre/libre7.webp";
import img4 from "../../../public/retiros/memorias/tejido/tejido1.webp";
import img5 from "../../../public/retiros/memorias/renacimiento/renacimiento1.webp";
import img6 from "../../../public/retiros/memorias/alquimia/ser1.webp";
import img7 from "../../../public/retiros/proximos/crisalida/crisalida2.webp";
import img8 from "../../../public/retiros/proximos/tambor/tambor2.webp";
import img9 from "../../../public/retiros/proximos/libre/libre3.webp";
import img10 from "../../../public/retiros/memorias/tejido/tejido2.webp";
import img11 from "../../../public/retiros/memorias/renacimiento/renacimiento3.webp";
import img12 from "../../../public/retiros/memorias/alquimia/ser5.webp";
import { StaticImageData } from "next/image";

// alquimia
import alquimia1 from "../../../public/retiros/memorias/alquimia/ser1.webp";
import alquimia2 from "../../../public/retiros/memorias/alquimia/ser2.webp";
import alquimia3 from "../../../public/retiros/memorias/alquimia/ser3.webp";
import alquimia4 from "../../../public/retiros/memorias/alquimia/ser4.webp";
import alquimia5 from "../../../public/retiros/memorias/alquimia/ser5.webp";
import alquimia6 from "../../../public/retiros/memorias/alquimia/ser6.webp";

// renacimiento
import renacimiento1 from "../../../public/retiros/memorias/renacimiento/renacimiento1.webp";
import renacimiento2 from "../../../public/retiros/memorias/renacimiento/renacimiento2.webp";
import renacimiento3 from "../../../public/retiros/memorias/renacimiento/renacimiento3.webp";
import renacimiento4 from "../../../public/retiros/memorias/renacimiento/renacimiento4.webp";
import renacimiento5 from "../../../public/retiros/memorias/renacimiento/renacimiento5.webp";
import renacimiento6 from "../../../public/retiros/memorias/renacimiento/renacimiento6.webp";

// tejido
import tejido1 from "../../../public/retiros/memorias/tejido/tejido1.webp";
import tejido2 from "../../../public/retiros/memorias/tejido/tejido2.webp";
import tejido3 from "../../../public/retiros/memorias/tejido/tejido3.webp";
import tejido4 from "../../../public/retiros/memorias/tejido/tejido4.webp";
import tejido5 from "../../../public/retiros/memorias/tejido/tejido5.webp";
import tejido6 from "../../../public/retiros/memorias/tejido/tejido6.webp";

// crisalida
import crisalida1 from "../../../public/retiros/proximos/crisalida/crisalida1.webp";
import crisalida2 from "../../../public/retiros/proximos/crisalida/crisalida2.webp";
import crisalida3 from "../../../public/retiros/proximos/crisalida/crisalida3.webp";
import crisalida4 from "../../../public/retiros/proximos/crisalida/crisalida4.webp";
import crisalida5 from "../../../public/retiros/proximos/crisalida/crisalida5.webp";
import crisalida6 from "../../../public/retiros/proximos/crisalida/crisalida6.webp";

// libre
import libre1 from "../../../public/retiros/proximos/libre/libre1.webp";
import libre2 from "../../../public/retiros/proximos/libre/libre2.webp";
import libre3 from "../../../public/retiros/proximos/libre/libre3.webp";
import libre4 from "../../../public/retiros/proximos/libre/libre4.webp";
import libre5 from "../../../public/retiros/proximos/libre/libre5.webp";
import libre6 from "../../../public/retiros/proximos/libre/libre6.webp";

// tambor
import tambor1 from "../../../public/retiros/proximos/tambor/tambor1.webp";
import tambor2 from "../../../public/retiros/proximos/tambor/tambor2.webp";
import tambor3 from "../../../public/retiros/proximos/tambor/tambor3.webp";
import tambor4 from "../../../public/retiros/proximos/tambor/tambor4.webp";
import tambor5 from "../../../public/retiros/proximos/tambor/tambor5.webp";
import tambor6 from "../../../public/retiros/proximos/tambor/tambor6.webp";

export type RetirosItemType = {
  textES: string;
  textEN: string;
  href: string;
  heroImg: StaticImageData;
  infoImg: StaticImageData;
  contDescESOne: string;
  contDescESTwo?: string | undefined;
  contDescENOne: string;
  contDescENTwo?: string;
  contTemES: string[];
  contTemEN: string[];
  facilitadores: { name: string; textES: string; textEN: string }[];
  priceES: string;
  priceEN: string;
  ctaHref: string;
  id: string;
  collage: StaticImageData[];
};

export const RetirosItems: RetirosItemType[] = [
  {
    textES: "Crisálida",
    textEN: "Chrysalis",
    href: "/retiros/crisalida",
    id: "crisalida",
    heroImg: img1,
    infoImg: img7,
    contDescESOne: `En este retiro vivencial de Re-Nacimiento te ofrecemos la oportunidad de explorar las creencias limitantes, duelos inconclusos y temas pendientes en tu vida que te impiden alcanzar tu máximo potencial.`,
    contDescESTwo:
      "Aprenderás a identificarlos, gestionarlos y tomar la decisión de dejarlos atrás para finalmente dar un rotundo SÍ a la vida y a tu propia pasión.",
    contDescENOne:
      "In this experiential Re-Birth retreat we offer you the opportunity to explore limiting beliefs, unfinished grief and pending issues in your life that prevent you from reaching your maximum potential.",
    contDescENTwo:
      " You will learn to identify them, manage them and make the decision to leave them behind to finally say a resounding YES to life and your own passion.",
    contTemES: [
      "Anclas Transgeneracionales - yacentes",
      "Duelos no resueltos y ciclos de experiencia inconclusos",
      "Niveles de apego",
      "Experiencia de transcender a la muerte",
      "Regreso a la vida a través actos conscientes de siembra y liberación",
    ],
    contTemEN: [
      "Transgenerational Anchors - recumbent",
      "Unresolved duels and unfinished cycles of experience",
      "Levels of attachment",
      "Experience of transcending death",
      "Return to life through conscious acts of sowing and liberation",
    ],
    facilitadores: [
      {
        name: "Victor Riascos",
        textES: `Fisioterapeuta especializado en terapias alternativas, con diversos estudios en neurociencia y ciencias de la consciencia. Docente de la Universidad del Rosario. Resume su experiencia bajo el nombre de Conversaciónes Sanadoras.
        Acompañará en este espacio explicando cómo funciona el cerebro desde la neurociencia y dando herramientas para ver la verdad detrás de nuestras creencias, para así poder entender y entrenar nuestra mente para alcanzar su máximo potencial.`,
        textEN: `Physiotherapist specialized in alternative therapies, with various studies in neuroscience and consciousness sciences. Professor at the Universidad del Rosario. He summarizes his experience under the name Healing Conversations.
        He will accompany us in this space explaining how the brain works from the perspective of neuroscience and us giving tools to see the truth behind our beliefs, in order to understand and train our mind to reach its maximum potential.`,
      },
      {
        name: "Sara Gonzalez",
        textES: `Microbióloga de profesión, docente por vocación, conferencista y tallerista. Desde hace más de 10 años, se desempeña como PsicoBioTerapeuta, trabajando desde una perspectiva sistémica e interdisciplinaria con diversas especialidades como bio-descodificación, fisiología del dolor, psicología del inconsciente, medicina natural, y sistemica familiar.
        Sara nos estará guiando en sesiones de bio-descodificación además de diversas meditaciones para conectar con nuestros guardianes internos.`,
        textEN: `Microbiologist by profession, teacher by vocation, lecturer and workshop leader. For more than 10 years, she has been working as a PsychoBioTherapist, working from a systemic and interdisciplinary perspective with various specialties such as bio-decoding, pain physiology, psychology of the unconscious, natural medicine, and family systemic.
        Sara will be guiding us in bio-decoding sessions as well as various meditations to connect with our inner guardians.`,
      },
      {
        name: "Olga Lucia Marín",
        textES: `Psicoterapeuta corporal desde el enfoque Core Energética, Bioenergética, Gestalt, Danzaterapia y Sound Healing con un respeto y relación profunda de la sabiduría del cuerpo y de la historia que llevamos grabada en él.
        Nos estará guiando desde la consciencia de lo que pasa en nosotros, nuestro cuerpo, el movimiento y la relación con él.`,
        textEN: `Body psychotherapist from the Core Energy, Bioenergetics, Gestalt, Dance Therapy and Sound Healing approach with a deep respect and relationship to the wisdom of the body and the history that we carry engraved in it.
        She will be guiding us from the awareness of what happens in us, our body, movement and the relationship with it.`,
      },
      {
        name: "Patricia Silva",
        textES: `Psicoterapeuta Transpersonal, graduada en Naturismo, Bioneuroemoción y Constelaciones Familiares. Acompaña procesos donde las personas necesitan ser escuchadas y guiadas a otra mirada frente a sus vidas.`,
        textEN: `Transpersonal Psychotherapist, graduated in Naturism, Bioneuroemotion and Family Constellations. She accompanies processes where people need to be listened to and guided to another perspective on their lives.`,
      },
    ],
    priceES: "$800.000 COP",
    priceEN: "$800.000 COP",
    ctaHref: "https://forms.gle/mY3q29G9iXahb84F9",
    collage: [
      crisalida1,
      crisalida2,
      crisalida3,
      crisalida4,
      crisalida5,
      crisalida6,
    ],
  },
  {
    textES: "Tambor Ceremonial",
    textEN: "Ceremonial Drum",
    href: "/retiros/tambor-ceremonial",
    id: "tambor-ceremonial",
    heroImg: img2,
    infoImg: img8,
    contDescESOne: `El tambor se usa para activar y curar nuestro espíritu, alineando la vibración de nuestro corazón con el de la Madre Tierra. Cada tambor tiene su propio sonido sin igual. Es usado en ceremonias, danzas, canciones, celebraciones, y en la actualidad es usado por diferentes practicantes de Terapia Alternativas y tradiciones de Oriente como el Yoga y Reiki. 
    El tambor es una entidad vibrante, en el cual habitan el espíritu del árbol con el que fue elaborado el marco, el espíritu del animal que le dio su piel al parche, y el espíritu de aquel que le dio con su temple el aliento de vida.`,
    contDescESTwo:
      "El taller será un mágico encuentro en el que CADA PARTICIPANTE CONSTRUIRÁ SU PROPIO TAMBOR CON SUS MANOS, ENERGÍA Y PROPÓSITO PERSONAL . Será un momento de introspección, concentración y meditación. Así mismo, tendremos un espacio de sensibilización sonora para que aprendas a tocar tu tambor y entrar en estados de profunda meditación entre el latido de tu tambor y el latido de tu corazón.",
    contDescENOne: `The drum is used to activate and heal our spirit, aligning the vibration of our heart with that of Mother Earth. Each drum has its own unparalleled sound. It is used in ceremonies, dances, songs, celebrations, and is currently used by different practitioners of Alternative Therapy and Eastern traditions such as Yoga and Reiki.
    The drum is a vibrant entity, inhabited by the spirit of the tree with which the frame was made, the spirit of the animal that gave its skin to the head, and the spirit of the one who gave it the breath of life with its temper.`,
    contDescENTwo:
      "The workshop will be a magical encounter in which EACH PARTICIPANT WILL BUILD THEIR OWN DRUM WITH THEIR HANDS, ENERGY AND PERSONAL PURPOSE. It will be a moment of introspection, concentration and meditation. Likewise, we will have a sound awareness space for you to learn to play your drum and enter states of deep meditation between the beat of your drum and the beat of your heart.",
    contTemES: [
      "Ritual de tejido tambor ceremonial",
      "Sensibilización sonora",
      "Círculo de saberes alrededor del fuego",
      "Baño de cascada y rio",
    ],
    contTemEN: [
      "Ceremonial drum weaving ritual",
      "Sound awareness",
      "Circle of knowledge around the fire",
      "Waterfall and river bath",
    ],
    facilitadores: [
      {
        name: `Horacio Serrano, "Suma Pinta"`,
        textES: `Diseñador industrial y gráfico, hacedor de tambores, (Drum Maker) tallerista internacional Caminante por más de veinte años de las diferentes tradiciones nativas de América. Aprendió la construcción de estos tambores en su primer taller de tambores en Canadá en el año 2001 y luego recibió el conocimiento de manos del abuelo Alfonso Castillo caminante de la tradición “Sioux-Lakota”. Hoy, al igual que sus maestros, y aplicando sus conocimientos académicos y experiencia les comparte con todos nosotros esta tradición enseñada de generación en generación. Desde el año 2015 está haciendo acompañamiento psicosocial en comunidades sobrevivientes del conflicto armado interno en Colombia como tallerista, y con la elaboración del tambor, y una metodología ritual y terapeutica creada para llevar alivio emocional, empoderamiento, resistencia y memoria desde la no-violencia, reconociendo al guerrero interno en cada uno de nosotros.`,
        textEN: `Industrial and graphic designer, drum maker, (Drum Maker) international workshop leader, Walker for more than twenty years of the different native traditions of America. He learned the construction of these drums in his first drum workshop in Canada in 2001 and later received the knowledge from grandfather Alfonso Castillo, a walker of the “Sioux-Lakota” tradition. Today, like his teachers, and applying his academic knowledge and experience, he shares with all of us this tradition taught from generation to generation. Since 2015 he has been providing psychosocial support in communities that survived the internal armed conflict in Colombia as a workshop leader, and with the elaboration of the drum, and a ritual and therapeutic methodology created to bring emotional relief, empowerment, resistance and memory from non-violence, recognizing the inner warrior in each of us.`,
      },
    ],
    priceES: "$650.000 COP Camping / $800.000 COP Habitación compartida",
    priceEN: "$650.000 COP Camping / $800.000 COP Shared room",
    ctaHref: "https://forms.gle/ZbKT5TH5hxCV5gY47",
    collage: [tambor1, tambor2, tambor3, tambor4, tambor5, tambor6],
  },
  {
    textES: "Ser Libre",
    textEN: "Be Free",
    href: "/retiros/ser-libre",
    id: "ser-libre",
    heroImg: img3,
    infoImg: img9,
    contDescESOne: `El retiro "Ser Libre" es un retiro vivencial de dos días y una noche diseñada para permitir a los participantes conectarse profundamente con su cuerpo, sus sentidos y sus emociones, a través de la inmersión en el mundo natural.`,
    contDescESTwo:
      "Basado en la metodología de la liberación alquímica, este retiro combina diversas prácticas, como constelaciones, respiración consciente y meditación, para facilitar la liberación de bloqueos emocionales y promover la autenticidad y la plenitud en la vida cotidiana.",
    contDescENOne: `The "Be Free" retreat is a two-day, one-night experiential retreat designed to allow participants to connect deeply with their body, their senses and their emotions, through immersion in the natural world.`,
    contDescENTwo:
      "Based on the methodology of alchemical liberation, this retreat combines various practices, such as constellations, conscious breathing and meditation, to facilitate the release of emotional blockages and promote authenticity and wholeness in everyday life.",
    contTemES: [
      "Constelación grupal enfocada en explorar y sanar patrones y dinámicas familiares, liberando bloqueos emocionales, promoviendo la integración y la reconciliación",
      "Inmersión en Hielo con entrenamiento mental y técnicas de respiración",
      "Reconexión con el cuerpo a través de prácticas corporales conscientes",
      "Exploración de los sentidos mediante ejercicios sensoriales en conexión con la naturaleza",
    ],
    contTemEN: [
      "Group constellation focused on exploring and healing family patterns and dynamics, releasing emotional blockages, promoting integration and reconciliation",
      "Ice immersion with mental training and breathing techniques",
      "Reconnection with the body through conscious body practices",
      "Exploration of the senses through sensory exercises in connection with nature",
    ],
    facilitadores: [
      {
        name: "Santiago Castillo",
        textES: `Ancestrológó especializado en la liberación personal. Acompaña a las personas a conectar con su naturaleza interior para que se permitan soltar las cargas emocionales atrapadas que les impide ser y sentirse libres.
        Dentro de la metodología Soltar de Raíz, utiliza técnicas como el Tantra, constelaciones familiares, respiraciones transformacionales, terapia del hielo, regresiones chamánicas, meditaciones expresivas y rituales.
        ¿Qué estas guardando que no te deja vivir en paz? ¡Es momento de soltarlo de raíz!`,
        textEN: `Ancestral scientist specialized in personal liberation. He helps people connect with their inner nature so that they allow themselves to release the trapped emotional burdens that prevent them from being and feeling free.
        Within the Root Release methodology, he uses techniques such as Tantra, family constellations, transformational breathing, ice therapy, shamanic regressions, expressive meditations and rituals.
        What are you keeping that doesn't let you live in peace? It's time to root it out!`,
      },
    ],
    priceES: "$550.000 COP Camping / $650.000 COP Habitación compartida",
    priceEN: "$550.000 COP Camping / $650.000 COP Shared room",
    ctaHref: "https://forms.gle/5NViysDPazqffhu49",
    collage: [libre1, libre2, libre3, libre4, libre5, libre6],
  },
  {
    textES: "Tejiendo en La Naturaleza",
    textEN: "Weaving in Nature",
    href: "/retiros/tejido",
    id: "tejido",
    heroImg: img4,
    infoImg: img10,
    contDescESOne:
      "Aprende los principios básicos de la técnica de tejido de macramé y crochet en un espacio natural junto a un hermoso río. Regálate un espacio de creación e inspiración en medio de la naturaleza.",
    contDescENOne:
      "Learn the basic principles of macramé and crochet weaving techniques in a natural space next to a beautiful river. Give yourself a space for creation and inspiration in the middle of nature.",
    contTemES: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    contTemEN: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    facilitadores: [
      {
        name: "Lorem ipsum",
        textES: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        textEN: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
    ],
    priceES: "Lorem ipsum",
    priceEN: "Lorem ipsum",
    ctaHref: "#",
    collage: [tejido1, tejido2, tejido3, tejido4, tejido5, tejido6],
  },
  {
    textES: "Terapia de Renacimiento",
    textEN: "Rebirth Therapy",
    href: "/retiros/renacimiento",
    id: "renacimiento",
    heroImg: img5,
    infoImg: img11,
    contDescESOne: `La terapia de renacimiento o rebirthing es una herramienta para la sanación emocional basada en ciclos de respiración con el objetivo de liberar tensiones, traumas y conflictos, acumulados en el cuerpo físico y emocional y que pueden tener origen desde el momento de tu nacimiento.`,
    contDescESTwo:
      "Está terapia alternativa es atribuida a Leonard Orr, quien dice que mientras tomaba una ducha recordó su propio nacimiento. En Mariposa Azul tuvimos la grandiosa oportunidad de ser parte del renacimiento de 16 almas que se unieron junto a la madre agua para revivir y resignificar su propio parto.",
    contDescENOne: `Rebirth or rebirthing therapy is a tool for emotional healing based on breathing cycles with the aim of releasing tensions, traumas and conflicts, accumulated in the physical and emotional body and that may originate from the moment of your birth.`,
    contDescENTwo:
      "This alternative therapy is attributed to Leonard Orr, who says that while taking a shower he remembered his own birth. At Mariposa Azul we had the great opportunity to be part of the rebirth of 16 souls who joined together with Mother Water to relive and redefine their own birth.",
    contTemES: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    contTemEN: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    facilitadores: [
      {
        name: "Lorem ipsum",
        textES: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        textEN: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
    ],
    priceES: "Lorem ipsum",
    priceEN: "Lorem ipsum",
    ctaHref: "#",
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
    textES: "Desarrollando tu Alquimia Interior",
    textEN: "Developing your Inner Alchemy",
    href: "/retiros/alquimia",
    id: "alquimia",
    heroImg: img6,
    infoImg: img12,
    contDescESOne: `En este retiro vivencial de Re-Nacimiento exploraramos las creencias limitantes, duelos inconclusos y temas pendientes en tu vida que te impiden alcanzar tu máximo potencial. Aprendimos a identificarlos, gestionarlos y tomar la decisión de dejarlos atrás para finalmente dar un rotundo SÍ a la vida y a nuestra propia pasión.`,
    contDescESTwo:
      "A través de diversas actividades y herramientas de autoexploración te acompañaremos a superar bloqueos emocionales, transformar creencias negativas y abrirte a nuevas posibilidades.",
    contDescENOne: `In this experiential Re-Birth retreat we will explore limiting beliefs, unfinished grief and pending issues in your life that prevent you from reaching your maximum potential. We learned to identify them, manage them and make the decision to leave them behind to finally say a resounding YES to life and our own passion.`,
    contDescENTwo:
      "Through various activities and self-exploration tools we will help you overcome emotional blockages, transform negative beliefs and open yourself to new possibilities.",
    contTemES: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    contTemEN: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    facilitadores: [
      {
        name: "Lorem ipsum",
        textES: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        textEN: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
    ],
    priceES: "Lorem ipsum",
    priceEN: "Lorem ipsum",
    ctaHref: "#",
    collage: [alquimia1, alquimia2, alquimia3, alquimia4, alquimia5, alquimia6],
  },
];
