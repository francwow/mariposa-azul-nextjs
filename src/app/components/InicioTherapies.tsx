"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import InfoCard from "./InfoCard";
import InViewEl from "./InView";
import { TerapiasItems } from "../_data/TerapiasItems";

const InicioTherapies = () => {
  const { language } = useLanguage();

  return (
    <section className="inicio-therapies content-section">
      <InViewEl activeClass="fade-up" notActiveClass="">
        <h2>
          {language === "ES"
            ? "Terapias Holísticas Complementarias"
            : "Complementary Holistic Therapies"}
        </h2>
      </InViewEl>

      <div className="therapies-items">
        {TerapiasItems.map((item, index) => {
          return (
            <InfoCard
              key={index}
              imgSrc={item.heroImg}
              nameES={item.textES}
              nameEN={item.textEN}
              href={item.href}
              alt="Imagen de terapia realizada por Mariposa Azul"
              btnBgColor="white"
            />
          );
        })}
      </div>
    </section>
  );
};

export default InicioTherapies;
