import Image from "next/image";
import MainBtn from "./MainBtn";
import { useLanguage } from "../contexts/ContextHooks";

type SoonItemProps = {
  imgSrc: string;
  nameES: string;
  nameEN: string;
  dateES: string;
  dateEN: string;
  alt: string;
};

const SoonItem = ({
  imgSrc,
  nameES,
  nameEN,
  dateES,
  dateEN,
  alt,
}: SoonItemProps) => {
  const { language } = useLanguage();

  return (
    <div className="soon-item">
      <div className="soon-img">
        <Image src={imgSrc} alt={alt} width={700} height={700} />
      </div>
      {language === "ES" ? (
        <div className="soon-info">
          <h3 className="soon-name">{nameES}</h3>
          <p className="soon-date">{dateES}</p>
        </div>
      ) : (
        <div className="soon-info">
          <h3 className="soon-name">{nameEN}</h3>
          <p className="soon-date">{dateEN}</p>
        </div>
      )}

      <MainBtn
        target={false}
        btnTextES="más información"
        btnTextEN="more info"
        href="/"
        bgColor="white"
      />
    </div>
  );
};

export default SoonItem;
