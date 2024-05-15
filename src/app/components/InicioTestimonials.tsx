"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import { testimonialCarousel } from "../_data/InicioItems";
import Carousel from "./Carousel";
import InViewEl from "./InView";

const InicioTestimonials = () => {
  const { language } = useLanguage();

  return (
    <section className="inicio-testimonials content-section">
      <InViewEl activeClass="fade-up" notActiveClass="">
        <h2>{language === "ES" ? "Testimonios" : "Testimonials"}</h2>
      </InViewEl>

      <Carousel carouselItems={testimonialCarousel} controls="arrow" />
    </section>
  );
};

export default InicioTestimonials;
