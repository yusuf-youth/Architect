import { Link } from "react-router-dom";
import { ArrowRight } from "../script/icons";

type ButtonTheme = "light" | "dark" | 'transparent';

interface ButtonProps {
  label: string;
  children: string;
  to: string;
  theme?: ButtonTheme;
  className?: string;
}

const Button = ({
  label,
  children,
  to,
  theme = "light",
  className = "",
}: ButtonProps) => {
  const linkClass = `button ${className} button--${theme}`;

  const isExternal =
    to.startsWith("http://") ||
    to.startsWith("https://") ||
    to.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={to}
        className={linkClass}
        aria-label={`${label}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="button__text">{label}</span>
        <span className="button__icon" aria-hidden="true">
          <ArrowRight />
        </span>
      </a>
    );
  }

  return (
    <Link to={to} className={linkClass} aria-label={`${label} (Go to page)`}>
      <span className="button__text">{children}</span>
      <span className="button__icon" aria-hidden="true">
        <ArrowRight />
      </span>
    </Link>
  );
};

export default Button;
