import img1 from "../../../public/inicio/inicio1.webp";
import img2 from "../../../public/inicio/inicio2.webp";
import img3 from "../../../public/inicio/inicio3.webp";
import img4 from "../../../public/inicio/inicio4.webp";
import img5 from "../../../public/inicio/inicio5.webp";
import img6 from "../../../public/inicio/inicio6.webp";
import { StaticImageData } from "next/image";

type carouselItem = {
  id: number;
  pES?: string;
  pEN?: string;
  h3ES?: string;
  h3EN?: string;
  alt?: string;
  imgSrc?: StaticImageData;
  btn?: {
    bgColor: "white" | "blue";
    target: boolean;
    href: string;
  };
};

export const InicioItems: carouselItem[] = [
  {
    imgSrc: img1,
    alt: "imagen de retiro de la Mariposa Azul",
    id: 0,
  },
  {
    imgSrc: img2,
    alt: "imagen de retiro de la Mariposa Azul",
    id: 1,
  },
  {
    imgSrc: img3,
    alt: "imagen de retiro de la Mariposa Azul",
    id: 2,
  },
  {
    imgSrc: img4,
    alt: "imagen de retiro de la Mariposa Azul",
    id: 3,
  },
  {
    imgSrc: img5,
    alt: "imagen de retiro de la Mariposa Azul",
    id: 4,
  },
  {
    imgSrc: img6,
    alt: "imagen de retiro de la Mariposa Azul",
    id: 5,
  },
];

export const testimonialCarousel: carouselItem[] = [
  {
    id: 0,
    pES: `"Mi experiencia en Mariposa Azul fue renovadora, reveladora y sanadora. Las actividades sincronizadas y complementarias la una  con la otra, ayudaba que en ningún momento se quebrara el proceso. La experiencia se enriqueció con la interacción con personas que vibraban al unísono,  con un excelente complemento en el descanso y la alimentación,  todo esto junto hicieron un fin de semana maravilloso lleno de luz y sanación."`,
    pEN: `"My experience at Mariposa Azul was renewing, revealing and healing. The activities were synchronized and complementary to each other, helping to ensure that the process was never broken. The experience was enriched by the interaction with people who vibrated in unison, with an excellent complement of rest and food, all of this together made for a wonderful weekend full of light and healing."`,
    h3ES: "Patricia Quintero",
    h3EN: "Patricia Quintero",
  },
  {
    id: 1,
    pES: `"El retiro que viví fue el regalo más grande y enriquecedor que me he podido dar en mi existencia por muchas razones. Los talleristas son personas muy preparadas, con un alto grado de experiencias y conocimientos que nos compartieron e hicieron abrir nuestras mentes para recibir la sabiduría y amor por uno y por ende hacia los demás. Mariposa Azul te brinda espacios donde puedes apreciar la naturaleza, la frescura del río, confort de las habitaciones y alimentación saludable. Todo ello nos da principalmente felicidad interior y ganas de compartir muchos momentos con la Mariposa Azul."`,
    pEN: `"The retreat I experienced was the greatest and most enriching gift I have been able to give myself in my existence for many reasons. The workshop leaders are very prepared people, with a high degree of experiences and knowledge that they shared with us and made us open our minds to receive wisdom and love for ourselves and therefore for others. Mariposa Azul offers you spaces where you can appreciate nature, the freshness of the river, the comfort of the rooms, and healthy food. All of this gives us inner happiness and the desire to share many moments with Mariposa Azul."`,
    h3ES: "Esperanza Vega",
    h3EN: "Esperanza Vega",
  },
  {
    id: 2,
    pES: `"Agradezco profundamente a Mariposa Azul por haberme brindando la herramienta de la alquimia del ser por que logré interiorizar sobre qué son la abundancia, la salud, cómo estoy dirigiendo mi energía hacia cada faceta de mi vida. Me llevo muchas grandes herramientas para mi vida."`,
    pEN: `"I am deeply grateful to Mariposa Azul for giving me the tool of the alchemy of being because I was able to internalize what abundance and health are, and how I am directing my energy towards each facet of my life. I take away many great tools for my life."`,
    h3ES: "Martha Silva",
    h3EN: "Martha Silva",
  },
];
