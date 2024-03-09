"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/ContextHooks";

const MainNav = () => {
  const { language } = useLanguage();

  return (
    <div className="nav-container">
      <nav className="main-nav">
        <ul className="nav-items">
          <li className="nav-item">
            <Link href={"#somos"}>
              {language === "ES" ? "Somos" : "About Us"}
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"#retiros"}>
              {language === "ES" ? "Retiros" : "Workshops"}
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"#terapias"}>
              {language === "ES" ? "Terapias" : "Therapies"}
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"#contacto"}>
              {language === "ES" ? "Contacto" : "Contact"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
