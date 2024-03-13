import Link from "next/link";
import { useExtraNav, useLanguage, useNav } from "../contexts/ContextHooks";
import { useEffect } from "react";

type NavExtraItems = {
  textES: string;
  textEN: string;
  href: string;
};

type NavItemProps = {
  extra: boolean;
  delay: string;
  href: string;
  textES: string;
  textEN: string;
  navName?: string;
  navExtraItems?: NavExtraItems[];
};

const NavItem = ({
  extra,
  delay,
  href,
  textES,
  textEN,
  navName,
  navExtraItems,
}: NavItemProps) => {
  const { navActive } = useNav();
  const { language } = useLanguage();
  const { extraNav, setExtraNav } = useExtraNav();

  useEffect(() => {
    if (!navActive) {
      setExtraNav(null);
    }
  }, [navActive, setExtraNav]);

  return !extra ? (
    <li className="nav-item">
      <Link
        style={
          navActive
            ? { transitionDelay: `${delay}` }
            : { transitionDelay: "0s" }
        }
        href={href}
      >
        {language === "ES" ? textES : textEN}
      </Link>
    </li>
  ) : (
    <li
      tabIndex={0}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setExtraNav(navName);
        }
      }}
      onMouseEnter={() => setExtraNav(navName)}
      onMouseLeave={() => setExtraNav(null)}
      onClick={() => setExtraNav(navName)}
      className="nav-item"
    >
      <Link
        style={
          navActive
            ? { transitionDelay: `${delay}` }
            : { transitionDelay: "0s" }
        }
        href={href}
      >
        {language === "ES" ? textES : textEN}
        <span className="nav-more"></span>
      </Link>
      <div
        className={
          extraNav === navName ? "nav-extra-item active" : "nav-extra-item"
        }
      >
        <ul className="nav-items">
          {navExtraItems?.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link href={item.href}>
                  {language === "ES" ? item.textES : item.textEN}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default NavItem;
