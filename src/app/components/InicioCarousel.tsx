"use client";

import { useEffect, useRef, useState } from "react";
import AutomaticCarousel from "./AutomaticCarousel";
import { InicioItems } from "@/app/_data/InicioItems";

const InicioCarousel = () => {
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
    <section ref={Ref} className="inicio-carousel">
      <AutomaticCarousel overlay carouselItems={InicioItems} />
    </section>
  );
};

export default InicioCarousel;
