interface BurgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const BurgerButton = ({ isOpen, onToggle }: BurgerButtonProps) => {
  const buttonClasses = `header__burger-button burger-button visible-mobile ${
    isOpen ? "is-active" : ""
  }`;

  const ariaLabel = isOpen ? "Close main menu" : "Open main menu";

  return (
    <button
      className={buttonClasses}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
    >
      <span className="burger-button__line" />
    </button>
  );
};

export default BurgerButton;
