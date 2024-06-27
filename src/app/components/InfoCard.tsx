import MainBtn from "./MainBtn";
import { useLanguage } from "../_contexts/ContextHooks";
import Image, { StaticImageData } from "next/image";
import InViewEl from "./InView";

type InfoCardProps = {
  key?: number;
  imgSrc: StaticImageData | string;
  nameES: string;
  nameEN: string;
  dateES?: string;
  dateEN?: string;
  btnBgColor: "blue" | "white" | "green";
  alt: string;
  href: string;
};

const InfoCard = (props: InfoCardProps) => {
  const { language } = useLanguage();

  return (
    <InViewEl
      activeClass="info-card-item fade-up"
      notActiveClass="info-card-item"
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

      <MainBtn target={false} href={props.href} bgColor={props.btnBgColor}>
        {language === "ES" ? "más información" : "more info"}
      </MainBtn>
    </InViewEl>
  );
};

export default InfoCard;
