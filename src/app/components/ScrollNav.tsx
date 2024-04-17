"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./GoogleIcon";

const ScrollNav = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <aside className={scrolled ? "scroll-up-btn active" : "scroll-up-btn"}>
      <Link href="#">
        <Icon icon="stat_1" />
      </Link>
    </aside>
  );
};

export default ScrollNav;
