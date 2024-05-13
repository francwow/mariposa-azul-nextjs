"use client";

import Image, { StaticImageData } from "next/image";
import MainBtn from "./MainBtn";
import { useLanguage } from "../_contexts/ContextHooks";
import { useState, useEffect } from "react";

type carouselItem = {
  id: number;
  pES?: string;
  pEN?: string;
  h3ES?: string;
  h3EN?: string;
  imgSrc?: StaticImageData;
  btn?: {
    bgColor: "white" | "blue";
    target: boolean;
    href: string;
  };
};

type carouselItems = carouselItem[];

type CarouselProps = {
  carouselItems: carouselItems;
  overlay?: boolean;
};

const AutomaticCarousel = ({ carouselItems, overlay }: CarouselProps) => {
  const [index, setIndex] = useState<number>(0);
  const { language } = useLanguage();

  useEffect(() => {
    function increaseIndex() {
      if (index < carouselItems.length - 1) {
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

  useEffect(() => {
    function increaseIndex() {
      if (index < carouselItems.length - 1) {
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
    <div className="carousel">
      {overlay ? <div className="carousel-overlay"></div> : null}
      {carouselItems.map((item, i) => {
        return (
          <div
            data-active={index === item.id ? "true" : "false"}
            key={i}
            className="carousel-item"
          >
            {item.imgSrc ? (
              <div className="carousel-img">
                <Image
                  src={item.imgSrc}
                  alt="carousel item"
                  width={2000}
                  height={2000}
                  priority={true}
                  placeholder="blur"
                />
              </div>
            ) : null}
            {language === "ES" ? (
              <>
                <p>{item.pES}</p>
                <h3>{item.h3ES}</h3>
              </>
            ) : (
              <>
                <p>{item.pEN}</p>
                <h3>{item.h3EN}</h3>
              </>
            )}

            {item.btn ? (
              <MainBtn
                href={item.btn.href}
                target={item.btn.target}
                bgColor={item.btn.bgColor}
              ></MainBtn>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default AutomaticCarousel;
