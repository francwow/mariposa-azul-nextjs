import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import InstagramFeed from "./components/InstagramFeed";

export default function Home() {
  return (
    <main className="main-container">
      <Inicio />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
