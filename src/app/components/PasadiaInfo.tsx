"use client";

import { useLanguage } from "../_contexts/ContextHooks";
import InViewEl from "./InView";
import MainBtn from "./MainBtn";

const PasadiaInfo = () => {
  const { language } = useLanguage();

  return (
    <section className="somos-info-section content-section">
      <div className="info-text">
        {/* <InViewEl
          activeClass="info-heading fade-up"
          notActiveClass="info-heading"
        >
          <h2>{language === "ES" ? "Sobre Mariposa" : "About Mariposa"}</h2>
        </InViewEl> */}
        {language === "ES" ? (
          <InViewEl activeClass="info fade-up" notActiveClass="info">
            <p>
              Durante un día tendrás la oportunidad de vivir la “Experiencia
              Mariposa Azul” de forma individual, en pareja o en grupo. Esta
              experiencia incluye:
            </p>
            <br />
            <br />
            <ul>
              <li>Circulo de apertura e intención y Oráculo</li>
              <li>
                Reconocimiento del territorio e inmersión en río / cascada
              </li>
              <li>
                Sesión de meditación con geometría sagrada + Sound healing con
                cuencos
              </li>
              <li>Almuerzo Saludable</li>
            </ul>
            <br />
            <br />
            <p>
              Si deseas incluir alguna terapia alternativa cuéntanos al momento
              de contactarnos
            </p>
            <br />
            <br />
            <MainBtn
              href="https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
              target
              bgColor="green"
            >
              Más información aquí
            </MainBtn>
          </InViewEl>
        ) : (
          <InViewEl activeClass="info fade-up" notActiveClass="info">
            <p>
              For one day you will have the opportunity to live the “Experience
              Blue Butterfly” individually, as a couple or in a group. This
              experience includes:
            </p>
            <br />
            <br />
            <ul>
              <li>Circle of opening and intention and Oracle</li>
              <li>
                Recognition of the territory and immersion in river / waterfall
              </li>
              <li>
                Meditation session with sacred geometry + Sound healing with
                bowls
              </li>
              <li>Healthy lunch</li>
            </ul>
            <br />
            <br />
            <p>
              If you want to include any alternative therapy, please let us know
            </p>
            <br />
            <br />
            <MainBtn
              href="https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
              target
              bgColor="green"
            >
              More info here
            </MainBtn>
          </InViewEl>
        )}
      </div>
    </section>
  );
};

export default PasadiaInfo;
