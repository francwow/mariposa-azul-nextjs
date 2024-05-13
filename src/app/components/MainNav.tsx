"use client";

import { useEffect } from "react";
import { useNav } from "../_contexts/ContextHooks";
import Languages from "./Languages";
import NavExtraItem from "./NavExtraItem";
import NavItem from "./NavItem";

const MainNav = () => {
  const { navActive } = useNav();

  useEffect(() => {
    if (navActive) {
      window.document.documentElement.style.overflowY = "hidden";
    } else {
      window.document.documentElement.style.overflowY = "scroll";
    }
  }, [navActive]);

  const navExtraItems1 = [
    { textES: "Crisálida", textEN: "Chrysalis", href: "/retiros/crisalida" },
    {
      textES: "Tambor Ceremonial",
      textEN: "Ceremonial Drum",
      href: "/retiros/tambor-ceremonial",
    },
    {
      textES: "Ser Libre",
      textEN: "Be Free",
      href: "/retiros/ser-libre",
    },
    {
      textES: "Tejiendo en La Naturaleza",
      textEN: "Weaving in Nature",
      href: "/retiros/tejido",
    },
    {
      textES: "Terapia de Renacimiento",
      textEN: "Rebirth Therapy",
      href: "/retiros/renacimiento",
    },
    {
      textES: "Desarrollando tu Alquimia Interior",
      textEN: "Developing your Inner Alchemy",
      href: "/retiros/alquimia",
    },
  ];

  const navExtraItems2 = [
    {
      textES: "Constelaciones Familiares",
      textEN: "Family Constellations",
      href: "/terapias/constelaciones",
    },
    {
      textES: "Biodescodificación",
      textEN: "Biodecoding",
      href: "/terapias/biodescodificacion",
    },
    {
      textES: "Arte de la escucha",
      textEN: "Art of listening",
      href: "/terapias/arte-escucha",
    },
    {
      textES: "Terapia de duelo",
      textEN: "Grief therapy",
      href: "/terapias/terapia-duelo",
    },
  ];

  return (
    <div className={navActive ? "nav-container active" : "nav-container"}>
      <nav className="main-nav">
        <NavExtraItem navName="retiros" navExtraItems={navExtraItems1} />
        <NavExtraItem navName="terapias" navExtraItems={navExtraItems2} />
        <Languages mobile={true} />
        <ul className="nav-items">
          <NavItem
            delay="0.1s"
            href="/"
            textES="Inicio"
            textEN="Home"
            extra={false}
          />
          <NavItem
            delay="0.2s"
            href="/somos"
            textES="Somos"
            textEN="About Us"
            extra={false}
          />
          <NavItem
            delay="0.3s"
            href="#retiros"
            textES="Retiros y Talleres"
            textEN="Retreats and Workshops"
            extra={true}
            navName="retiros"
            navExtraItems={navExtraItems1}
          />
          <NavItem
            delay="0.4s"
            href="#terapias"
            textES="Terapias"
            textEN="Therapies"
            extra={true}
            navName="terapias"
            navExtraItems={navExtraItems2}
          />
          <NavItem
            delay="0.5s"
            href="/contacto"
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
