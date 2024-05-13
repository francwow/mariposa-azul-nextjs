import MainBtn from "./MainBtn";
import { useLanguage } from "../_contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type InfoCardProps = {
  imgSrc: string;
  nameES: string;
  nameEN: string;
  dateES?: string;
  dateEN?: string;
  btnBgColor: "blue" | "white";
  alt: string;
};

const InfoCard = (props: InfoCardProps) => {
  const { language } = useLanguage();
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={itemRef}
      style={{ opacity: "0" }}
      className={itemInView ? "info-card-item fade-up" : "info-card-item"}
    >
      <div className="info-card-img">
        <Image src={props.imgSrc} alt={props.alt} width={700} height={700} />
      </div>
      {language === "ES" ? (
        <div className="info-card-info">
          <h3 className="info-card-name">{props.nameES}</h3>
          {props.dateES ? (
            <p className="info-card-date">{props.dateES}</p>
          ) : null}
        </div>
      ) : (
        <div className="info-card-info">
          <h3 className="info-card-name">{props.nameEN}</h3>
          {props.dateEN ? (
            <p className="info-card-date">{props.dateEN}</p>
          ) : null}
        </div>
      )}

      <MainBtn target={false} href="/" bgColor={props.btnBgColor}>
        {language === "ES" ? "más información" : "more info"}
      </MainBtn>
    </div>
  );
};

export default InfoCard;
