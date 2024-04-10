import Footer from "../components/Footer";
import SomosFundadoras from "../components/SomosFundadoras";
import SomosHero from "../components/SomosHero";
import SomosInfo from "../components/SomosInfo";

const SomosPage = () => {
  return (
    <main className="main-container">
      <SomosHero />
      <SomosInfo />
      <SomosFundadoras />
      <Footer />
    </main>
  );
};

export default SomosPage;
