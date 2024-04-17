"use client";

import { InicioItems } from "@/app/data/InicioItems";
import InicioSoon from "./InicioSoon";
import InicioTherapies from "./InicioTherapies";
import InicioTestimonials from "./InicioTestimonials";
import AutomaticCarousel from "./AutomaticCarousel";
import { useState, useEffect, useRef } from "react";

const Inicio = () => {
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
    <div className="inicio-wrapper">
      <section ref={Ref} className="inicio-carousel">
        <AutomaticCarousel overlay carouselItems={InicioItems} />
      </section>
      <InicioSoon />
      <InicioTherapies />
      <InicioTestimonials />
    </div>
  );
};

export default Inicio;
