"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useNav } from "../_contexts/ContextHooks";
import Languages from "./Languages";

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { navActive, setNavActive } = useNav();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    let noScroll = 0;

    const scrollHandle = () => {
      const scrollY = window.scrollY;
      if (noScroll < scrollY && scrollY > 200) {
        setScrolled(true);
      } else if (noScroll > scrollY) {
        setScrolled(false);
      }

      noScroll = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current !== undefined) {
      let headerRect = headerRef.current?.getBoundingClientRect();
      let headerHeight = headerRect?.height;

      window.document.body.style.setProperty(
        "--header-height",
        `${headerHeight}`
      );
    }
  }, []);

  return (
    <div
      ref={headerRef}
      data-nav-active={navActive ? "true" : "false"}
      className={scrolled ? "header-container scrolled" : "header-container"}
    >
      <header className="header">
        <Languages mobile={false} />
        <Logo />
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setNavActive(!navActive);
            }
          }}
          onClick={() => setNavActive(!navActive)}
          className="burger-btn-container"
        >
          <div className="burger-btn"></div>
        </div>
        <MainNav />
      </header>
    </div>
  );
};

export default Header;
