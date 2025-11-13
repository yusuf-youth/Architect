import { Link } from "react-router-dom";
import logo from "../../public/icons/header-logo.svg";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
  invert?: boolean;
}

function Logo({ width, height, className, invert = false }: LogoProps) {
  return (
    <Link
      className={`logo ${invert && "logo--dark"} ${className}`}
      to="/"
      aria-label="Go to homepage"
    >
      <img
        className="header__logo-img"
        src={logo}
        alt="Company Logo"
        width={`${width}px`}
        height={`${height}px`}
      />
    </Link>
  );
}

export default Logo;
