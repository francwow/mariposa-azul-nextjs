import { InicioItems } from "@/app/data/InicioItems";
import InicioSoon from "./InicioSoon";
import InicioTherapies from "./InicioTherapies";
import InicioTestimonials from "./InicioTestimonials";
import AutomaticCarousel from "./AutomaticCarousel";

const Inicio = () => {
  return (
    <div className="inicio-wrapper">
      <section className="inicio-carousel">
        <AutomaticCarousel overlay carouselItems={InicioItems} />
      </section>
      <InicioSoon />
      <InicioTherapies />
      <InicioTestimonials />
    </div>
  );
};

export default Inicio;
