/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/ContextHooks";
import img from "../../../public/pasadia/pasadia2.webp";
import { useEffect, useState, useRef } from "react";

const PasadiaHero = () => {
  const { language } = useLanguage();
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
      <div className="hero-overlay"></div>
      <div
        style={{ transform: `translate3d(0, ${1 - translateY / 10}px, 0)` }}
        className="hero-heading"
      >
        <h1>{language === "ES" ? "Pasadía" : "Day out"}</h1>
        <h2>{language === "ES" ? "Mariposa Azul" : "Mariposa Azul"}</h2>
      </div>
      <div ref={Ref} className="hero-img">
        <Image
          src={img}
          alt="Imagen de un río en La Vega, Colombia"
          width={1920}
          height={1080}
          priority
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default PasadiaHero;
