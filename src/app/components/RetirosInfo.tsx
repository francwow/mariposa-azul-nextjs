"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/ContextHooks";
import { RetirosItems } from "../data/RetirosItems";

type RetirosInfoProps = {
  id: string;
};

const RetirosInfo = ({ id }: RetirosInfoProps) => {
  const { language } = useLanguage();

  return (
    <section className="retiros-info-section content-section">
      {RetirosItems.map((item, i) => {
        return id === item.id ? (
          <div className="info-wrapper" key={i}>
            <div className="info">
              <p>{language === "ES" ? item.contDescES : item.contDescEN}</p>
            </div>
            <div className="info-container">
              <div className="info-text">
                <h2>
                  {language === "ES"
                    ? "Contenido Temático"
                    : "Thematic Content"}
                </h2>
                <ul className="info-items">
                  {language === "ES"
                    ? item.contTemES.map((contItem, j) => {
                        return (
                          <li className="info-item" key={j}>
                            {contItem}
                          </li>
                        );
                      })
                    : item.contTemEN.map((contItem, j) => {
                        return (
                          <li className="info-item" key={j}>
                            {contItem}
                          </li>
                        );
                      })}
                </ul>
              </div>
              <div className="info-img">
                <Image
                  src={item.infoImg}
                  alt="Imagen de retiro de La Mariposa Azul"
                  width={700}
                  height={700}
                  priority
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="info-container">
              <div className="info-text">
                <div className="info-heading">
                  <h2>
                    {language === "ES" ? "Facilitadores" : "Facilitators"}
                  </h2>
                </div>
                <div className="info-text">
                  {item.facilitadores.map((contItem, i) => {
                    return (
                      <div key={i} className="info">
                        <h3>{contItem.name}</h3>
                        <p>
                          {language === "ES"
                            ? contItem.textES
                            : contItem.textEN}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </section>
  );
};

export default RetirosInfo;
