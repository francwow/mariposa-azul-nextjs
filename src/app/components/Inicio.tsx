import InicioSoon from "./InicioSoon";
import InicioTherapies from "./InicioTherapies";
import InicioTestimonials from "./InicioTestimonials";
// import InstagramFeed from "./InstagramFeed";
import InicioCarousel from "./InicioCarousel";
import InstagramFeed from "./InstagramFeedCopy";

const Inicio = ({ images }: any) => {
  return (
    <div className="inicio-wrapper">
      <InicioCarousel />
      <InicioSoon />
      <InicioTherapies />
      <InicioTestimonials />
      {/* <InstagramFeed /> */}
      <InstagramFeed images={images} />
    </div>
  );
};

export default Inicio;
