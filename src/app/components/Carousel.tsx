import Image, { StaticImageData } from "next/image";
import MainBtn from "./MainBtn";
import { useLanguage } from "../contexts/ContextHooks";
import Icon from "./GoogleIcon";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

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
  controls?: string;
};

const Carousel = ({ carouselItems, overlay, controls }: CarouselProps) => {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const [inverted, setInverted] = useState(false);
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const rightArrow = () => {
    if (active >= 2) {
      return;
    } else {
      setActive(active + 1);
    }
    console.log(active);
  };

  const leftArrow = () => {
    if (active === 0) {
      return;
    } else {
      setActive(active - 1);
    }
    console.log(active);
  };

  return (
    <div
      ref={itemRef}
      style={{ opacity: "0" }}
      className={itemInView ? "carousel fade-up" : "carousel"}
    >
      {overlay ? <div className="carousel-overlay"></div> : null}
      {carouselItems.map((item, index) => {
        return (
          <div
            data-inverted={inverted ? "true" : "false"}
            key={index}
            className={
              active === index ? "carousel-item active" : "carousel-item"
            }
          >
            {item.imgSrc ? (
              <div className="carousel-img">
                <Image
                  src={item.imgSrc}
                  alt="carousel item"
                  width={700}
                  height={700}
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
      {controls ? (
        <div className="arrow-container">
          <div
            style={active === 0 ? { opacity: "0.2" } : { opacity: "1" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                leftArrow();
                setInverted(true);
              }
            }}
            onClick={() => {
              leftArrow();
              setInverted(true);
            }}
            className="arrow"
          >
            <Icon icon="arrow_forward_ios" />
          </div>
          <div
            style={active === 2 ? { opacity: "0.2" } : { opacity: "1" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                rightArrow();
                setInverted(false);
              }
            }}
            onClick={() => {
              rightArrow();
              setInverted(false);
            }}
            className="arrow"
          >
            <Icon icon="arrow_forward_ios" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
