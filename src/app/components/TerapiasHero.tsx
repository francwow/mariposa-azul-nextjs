// import { useLanguage } from "../contexts/ContextHooks";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { TerapiasItems } from "../data/TerapiasItems";

type TerapiasHeroProps = {
  id: string;
};

const TerapiasHero = ({ id }: TerapiasHeroProps) => {
  // const { language } = useLanguage();
  const [translateY, setTranslateY] = useState(0);
  const Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const translate = () => {
      let scrollY = window.scrollY;
      setTranslateY(scrollY);
    };

    window.addEventListener("scroll", translate);

    return () => {
      window.removeEventListener("scroll", translate);
    };
  }, []);

  useEffect(() => {
    if (Ref.current !== null) {
      Ref.current.style.setProperty("--translateY", `${translateY}`);
    }
  }, [translateY]);

  return (
    <section className="hero-section">
      {TerapiasItems.map((item, index) => {
        return id === item.id ? (
          <div key={index}>
            <div className="hero-overlay"></div>
            {/* <div
              style={{
                transform: `translate3d(0, ${1 - translateY / 10}px, 0)`,
              }}
              className="hero-heading"
            >
              <h1>{language === "ES" ? item.textES : item.textEN}</h1>
            </div> */}
            <div ref={Ref} className="hero-img">
              <Image
                src={item.heroImg}
                alt="Imagen de un río en La Vega, Colombia"
                width={1920}
                height={1080}
                priority
                placeholder="blur"
              />
            </div>
          </div>
        ) : null;
      })}
    </section>
  );
};

export default TerapiasHero;
