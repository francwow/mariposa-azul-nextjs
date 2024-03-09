import Logo from "./Logo";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <Logo />
        <MainNav />
      </header>
    </div>
  );
};

export default Header;
