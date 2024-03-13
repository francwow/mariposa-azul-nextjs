"use client";

import { useNav } from "../contexts/ContextHooks";
import Languages from "./Languages";
import NavExtraItem from "./NavExtraItem";
import NavItem from "./NavItem";

const MainNav = () => {
  const { navActive } = useNav();

  const navExtraItems1 = [
    { textES: "Próximos", textEN: "Upcoming", href: "/" },
    { textES: "Memorias", textEN: "Memories", href: "/" },
  ];

  const navExtraItems2 = [
    {
      textES: "Constelaciones Familiares",
      textEN: "Family Constellations",
      href: "/",
    },
    { textES: "Biodescodificación", textEN: "Biodecoding", href: "/" },
    { textES: "Arte de la escucha", textEN: "Art of listening", href: "/" },
    { textES: "Terapia de duelo", textEN: "Grief therapy", href: "/" },
  ];

  return (
    <div className={navActive ? "nav-container active" : "nav-container"}>
      <nav className="main-nav">
        <NavExtraItem navName="retiros" navExtraItems={navExtraItems1} />
        <NavExtraItem navName="terapias" navExtraItems={navExtraItems2} />
        <Languages />
        <ul className="nav-items">
          <NavItem
            delay="0.1s"
            href="#somos"
            textES="Somos"
            textEN="About Us"
            extra={false}
          />
          <NavItem
            delay="0.2s"
            href="#retiros"
            textES="Retiros"
            textEN="Retreats"
            extra={true}
            navName="retiros"
            navExtraItems={navExtraItems1}
          />
          <NavItem
            delay="0.3s"
            href="#terapias"
            textES="Terapias"
            textEN="Therapies"
            extra={true}
            navName="terapias"
            navExtraItems={navExtraItems2}
          />
          <NavItem
            delay="0.4s"
            href="#contacto"
            textES="Contacto"
            textEN="Contact"
            extra={false}
          />
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
