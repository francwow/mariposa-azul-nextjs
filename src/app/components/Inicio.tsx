"use client";

import Image from "next/image";
import { InicioItems } from "@/app/data/InicioItems";
import { useEffect, useState } from "react";
import InicioSoon from "./InicioSoon";
import InicioTherapies from "./InicioTherapies";

const Inicio = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    function increaseIndex() {
      if (index < InicioItems.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }

    const startCarousel = setInterval(function () {
      increaseIndex();
    }, 3000);
    return () => clearInterval(startCarousel);
  }, [index]);

  return (
    <section className="inicio-section">
      <div className="inicio-carousel">
        <div className="inicio-overlay"></div>
        {InicioItems.map((item) => {
          return (
            <div
              data-active={index === item.id ? "true" : "false"}
              key={item.id}
              className="carousel-item"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={2000}
                height={2000}
                priority
              />
            </div>
          );
        })}
      </div>
      <InicioSoon />
      <InicioTherapies />
    </section>
  );
};

export default Inicio;
