"use client";

import { useExtraNav, useLanguage, useNav } from "../_contexts/ContextHooks";
import Link from "next/link";

type NavExtraItems = {
  textES: string;
  textEN: string;
  href: string;
};

type NavExtraItemProps = {
  navName: string;
  navExtraItems: NavExtraItems[];
};

const NavExtraItem = ({ navName, navExtraItems }: NavExtraItemProps) => {
  const { setNavActive } = useNav();
  const { extraNav, setExtraNav } = useExtraNav();
  const { language } = useLanguage();

  return (
    <div
      className={
        extraNav === navName
          ? "nav-extra-item-mobile active"
          : "nav-extra-item-mobile"
      }
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setExtraNav(null);
          }
        }}
        onClick={() => setExtraNav(null)}
        className="back-btn"
      ></div>
      <ul className="nav-items">
        {navExtraItems?.map((item, index) => {
          return (
            <li
              tabIndex={0}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setNavActive(false);
                }
              }}
              onClick={() => setNavActive(false)}
              key={index}
              className="nav-item"
            >
              <Link href={item.href}>
                {language === "ES" ? item.textES : item.textEN}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavExtraItem;
