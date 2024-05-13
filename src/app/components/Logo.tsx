"use client";

import Image from "next/image";
import Link from "next/link";
import { useNav } from "../_contexts/ContextHooks";

const Logo = () => {
  const { setNavActive } = useNav();

  return (
    <div className="logo-container">
      <Link
        tabIndex={0}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setNavActive(false);
          }
        }}
        onClick={() => setNavActive(false)}
        href={"/"}
      >
        <Image
          src={"/logo/logo-website.webp"}
          alt="logo de Mariposa Azul"
          width={500}
          height={500}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
