import InicioSoon from "./InicioSoon";
import InicioTherapies from "./InicioTherapies";
import InicioTestimonials from "./InicioTestimonials";
import InstagramFeed from "./InstagramFeed";
import InicioCarousel from "./InicioCarousel";

const Inicio = () => {
  return (
    <div className="inicio-wrapper">
      <InicioCarousel />
      <InicioSoon />
      <InicioTherapies />
      <InicioTestimonials />
      <InstagramFeed />
    </div>
  );
};

export default Inicio;
