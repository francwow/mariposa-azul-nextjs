import Link from "next/link";
import Logo from "./Logo";
// import MainNav from "./MainNav";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <Logo />
        {/* <MainNav /> */}
        <div className="footer-copyright">
          <span>© Mariposa Azul | 2024 | Todos los derechos reservados</span>
          <br />
          <span>
            Desarrollado por{" "}
            <Link href={"https://www.francwow.com/"} target="_blank">
              <strong>francwow</strong>
            </Link>
          </span>
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
