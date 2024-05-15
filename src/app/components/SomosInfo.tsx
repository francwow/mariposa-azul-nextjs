"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import InViewEl from "./InView";
import MainBtn from "./MainBtn";

const SomosInfo = () => {
  const { language } = useLanguage();

  return (
    <section className="somos-info-section content-section">
      <div className="info-video">
        <InViewEl
          activeClass="info-heading fade-up"
          notActiveClass="info-heading"
        >
          <h2>
            <q>
              {language === "ES"
                ? "Te ayudamos a dar el primer paso de tu propio sendero para que puedas caminarlo"
                : "We help you take the first step on your own path so that you can walk it"}
            </q>
          </h2>
        </InViewEl>
        <InViewEl
          activeClass="somos-video fade-up"
          notActiveClass="somos-video"
        >
          <video
            width={1280}
            height={720}
            muted
            preload="true"
            loop
            autoPlay
            playsInline
            src="/video/somos-video.mp4"
          >
            <source src="/video/somos-video.mp4" type="video/mp4" />
          </video>
        </InViewEl>
      </div>
      <div className="info-text">
        <InViewEl
          activeClass="info-heading fade-up"
          notActiveClass="info-heading"
        >
          <h2>{language === "ES" ? "Sobre Mariposa" : "About Mariposa"}</h2>
        </InViewEl>
        {language === "ES" ? (
          <InViewEl activeClass="info fade-up" notActiveClass="info">
            <p>
              Mariposa Azul se gesta con la intención de crear retiros de
              bienestar y experiencias integrales del ser inmersos en un paraíso
              natural en medio de extensas montañas, rodeada de nacimientos de
              agua, un majestuoso río y cientos de especies de aves y mariposas.
              Estamos ubicados en el municipio La Vega, Cundinamarca, a tan sólo
              1 hora y media de Bogotá.
              <br />
              <br />
              Su nombre hace honor a la Mariposa Morpho Azul que suele ser vista
              por aquellos visitantes que abren su corazón a recibir su mensaje.
              La Mariposa Azul es considerada como un símbolo divino de
              transformación, renacimiento, autoexpresión y conexión con el
              mundo espiritual.
            </p>
            <br />
            <br />
            <MainBtn
              href="https://www.instagram.com/somos.mariposa.azul/"
              target
              bgColor="white"
            >
              Síguenos en Instagram
            </MainBtn>
          </InViewEl>
        ) : (
          <InViewEl activeClass="info fade-up" notActiveClass="info">
            <p>
              Mariposa Azul was created with the intention of creating wellness
              retreats and integral experiences of being immersed in a natural
              paradise in the middle of extensive mountains, surrounded by water
              sources, a majestic river and hundreds of species of birds and
              butterflies. We are located in La Vega, Cundinamarca, just 1 hour
              and a half from Bogotá.
              <br />
              <br />
              Its name honors the Blue Morpho Butterfly that is usually seen by
              those visitors who open their hearts to receive its message. The
              Blue Butterfly is considered a divine symbol of transformation,
              rebirth, self-expression and connection to the spiritual world.
            </p>
            <br />
            <br />
            <MainBtn
              href="https://www.instagram.com/somos.mariposa.azul/"
              target
              bgColor="white"
            >
              Follow us on Instagram
            </MainBtn>
          </InViewEl>
        )}
      </div>
    </section>
  );
};

export default SomosInfo;
