import { useState } from "react";
import { HEADER_LINKS, type NavItem } from "../script/data";
import { Link, useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" width={70} height={43} />

        <nav
          className="header__menu hidden-mobile"
          aria-label="Primary navigation"
        >
          <ul className="header__menu-list">
            {HEADER_LINKS.map((link: NavItem) => {
              const isActive = location.pathname === link.path;
              const linkClass = `header__menu-link ${
                isActive ? "is-active" : ""
              }`;

              return (
                <li key={link.path} className="header__menu-item">
                  <Link
                    className={linkClass}
                    to={link.path}
                    title={`Go to the ${link.title} page`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={isMenuOpen ? toggleMenu : undefined}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <BurgerButton isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
