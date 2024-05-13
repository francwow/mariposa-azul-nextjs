"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SomosFundadorasItemProps = {
  h3: string;
  pES: string;
  pEN: string;
  imgSrc: string;
  imgAlt: string;
};

const SomosFundadorasItem = ({
  h3,
  pES,
  pEN,
  imgSrc,
  imgAlt,
}: SomosFundadorasItemProps) => {
  const { language } = useLanguage();
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={itemRef}
      style={{ opacity: "0" }}
      className={
        itemInView ? "somos-fundadoras-item fade-up" : "somos-fundadoras-item"
      }
    >
      <div className="somos-fundadoras-text">
        <h3>{h3}</h3>
        <p>{language === "ES" ? pES : pEN}</p>
      </div>
      <div className="somos-fundadoras-img">
        <div className="somos-fundadoras-overlay"></div>
        <Image src={imgSrc} alt={imgAlt} width={700} height={700} priority />
      </div>
    </div>
  );
};

export default SomosFundadorasItem;
