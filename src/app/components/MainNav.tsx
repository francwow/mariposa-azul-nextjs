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
    {
      textES: "Retiro de Renacimiento",
      textEN: "Rebirth Retreat",
      href: "/retiros/renacimiento",
    },
    {
      textES: "Retiro conexión con la naturaleza",
      textEN: "Retreat connection with nature",
      href: "/retiros/naturaleza",
    },
    {
      textES: "Taller Tejiendo en La Naturaleza",
      textEN: "Knitting in Nature Workshop",
      href: "/talleres/tejido",
    },
    {
      textES: "Taller Tambor Ceremonial",
      textEN: "Ceremonial Drum Workshop",
      href: "/talleres/tambor-ceremonial",
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
    {
      textES: "Sonoterapia con cuencos de cuarzo",
      textEN: "Sonotherapy with quartz bowls",
      href: "/terapias/sonoterapia",
    },
    {
      textES: "Terapia con geometría sagrada",
      textEN: "Sacred geometry therapy",
      href: "/terapias/geometria-sagrada",
    },
    {
      textES: "Masaje terapéutico relajante",
      textEN: "Relaxing therapeutic massage",
      href: "/terapias/masaje-terapeutico",
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
            id="retiros-talleres"
          />
          <NavItem
            delay="0.4s"
            href="#terapias"
            textES="Terapias"
            textEN="Therapies"
            extra={true}
            navName="terapias"
            navExtraItems={navExtraItems2}
            id="terapias"
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
