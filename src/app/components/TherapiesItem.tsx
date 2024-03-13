import { useLanguage } from "../contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import MainBtn from "./MainBtn";

type TherapiesItemProps = {
  imgSrc: string;
  nameES: string;
  nameEN: string;
  alt: string;
};

const TherapiesItem = ({ imgSrc, nameES, nameEN, alt }: TherapiesItemProps) => {
  const { language } = useLanguage();
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={itemRef}
      style={{ opacity: "0" }}
      className={itemInView ? "therapies-item fade-up" : "therapies-item"}
    >
      <div className="therapies-img">
        <Image src={imgSrc} alt={alt} width={700} height={700} />
      </div>
      {language === "ES" ? (
        <div className="therapies-info">
          <h3 className="therapies-name">{nameES}</h3>
        </div>
      ) : (
        <div className="therapies-info">
          <h3 className="therapies-name">{nameEN}</h3>
        </div>
      )}

      <MainBtn
        target={false}
        btnTextES="más información"
        btnTextEN="more info"
        href="/"
        bgColor="blue"
      />
    </div>
  );
};

export default TherapiesItem;
