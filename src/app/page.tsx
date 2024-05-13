import Footer from "./components/Footer";
import Inicio from "./components/Inicio";

export default async function Home() {
  return (
    <main className="main-container">
      <Inicio />
      <Footer />
    </main>
  );
}
