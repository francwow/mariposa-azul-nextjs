"use client";

import { useLanguage } from "../contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import { testimonialCarousel } from "../data/InicioItems";
import Carousel from "./Carousel";

const InicioTestimonials = () => {
  const { language } = useLanguage();
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="inicio-testimonials content-section">
      <h2
        style={{ opacity: "0" }}
        ref={itemRef}
        className={itemInView ? "fade-up" : ""}
      >
        {language === "ES" ? "Testimonios" : "Testimonials"}
      </h2>
      <Carousel carouselItems={testimonialCarousel} controls="arrow" />
    </section>
  );
};

export default InicioTestimonials;
