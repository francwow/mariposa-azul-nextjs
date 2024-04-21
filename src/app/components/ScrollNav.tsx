"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./GoogleIcon";
import { useNav } from "../contexts/ContextHooks";

const ScrollNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { navActive } = useNav();

  useEffect(() => {
    function scrollTop() {
      let scrollY = window.scrollY;
      if (scrollY >= 300) {
        setScrolled(true);
      } else if (scrollY <= 299) {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollTop);

    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  // useEffect(() => {
  //   console.log(scrollDirection);
  // }, [scrollDirection]);

  return !navActive ? (
    <aside className={scrolled ? "scroll-up-btn active" : "scroll-up-btn"}>
      <Link href="#">
        <Icon icon="stat_1" />
      </Link>
    </aside>
  ) : null;
};

export default ScrollNav;
