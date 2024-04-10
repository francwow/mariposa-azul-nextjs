"use client";

import { useLanguage } from "../contexts/ContextHooks";
import MainBtn from "./MainBtn";
import { useInView } from "react-intersection-observer";

const SomosInfo = () => {
  const { language } = useLanguage();
  const { inView: itemInView1, ref: itemRef1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { inView: itemInView2, ref: itemRef2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="somos-info-section">
      <div ref={itemRef1} className="somos-info-video">
        <div
          style={{ opacity: "0" }}
          className={
            itemInView1 ? "somos-info-heading fade-up" : "somos-info-heading"
          }
        >
          <h2>
            {language === "ES"
              ? "Crear experiencias de bienestar con la naturaleza"
              : "Create wellness experiences with nature"}
          </h2>
        </div>
        <div
          style={{ opacity: "0" }}
          className={itemInView1 ? "somos-video fade-up" : "somos-video"}
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
        </div>
      </div>
      <div ref={itemRef2} className="somos-info-text">
        <div
          style={{ opacity: "0" }}
          className={
            itemInView2 ? "somos-info-heading fade-up" : "somos-info-heading"
          }
        >
          <h2>{language === "ES" ? "Sobre Mariposa" : "About Mariposa"}</h2>
        </div>
        {language === "ES" ? (
          <div
            style={{ opacity: "0" }}
            className={itemInView2 ? "somos-info fade-up" : "somos-info"}
          >
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
          </div>
        ) : (
          <div
            style={{ opacity: "0" }}
            className={itemInView2 ? "somos-info fade-up" : "somos-info"}
          >
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
          </div>
        )}
      </div>
    </section>
  );
};

export default SomosInfo;
