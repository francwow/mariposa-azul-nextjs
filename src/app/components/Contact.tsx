"use client";

import Image from "next/image";
import img from "../../../public/otros/otros20.webp";
import { useLanguage } from "../contexts/ContextHooks";
import Link from "next/link";
import Social from "./Social";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section className="contact-section">
      <div className="contact-info">
        <div className="contact-info-text">
          <h2>
            {language === "ES"
              ? "¿Tienes dudas sobre nuestros retiros y terapias?"
              : "Do you have questions about our retreats and therapies?"}
          </h2>
          <h3>{language === "ES" ? "Escríbenos" : "Send us an email"}</h3>
          <Link href={"mailto:somos.mariposa.azul@gmail.com"}>
            <span>somos.mariposa.azul@gmail.com</span>
          </Link>
          <Link
            href={
              "https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
            }
          >
            <span>
              {language === "ES" ? "Inscríbete hoy" : "Sign up today"}
            </span>
          </Link>
        </div>
        <div className="contact-info-social">
          <h3>
            {language === "ES" ? "Síguenos en redes sociales" : "Follow us on"}
          </h3>
          <Social />
        </div>
      </div>
      <div className="contact-overlay"></div>
      <div className="contact-bg-img">
        <Image
          src={img}
          alt="Imagen de retiro en La Vega, Colombia"
          width={2000}
          height={2000}
          priority={true}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Contact;
