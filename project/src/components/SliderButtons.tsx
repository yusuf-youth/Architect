import { ArrowLeft, ArrowRight } from "../script/icons";

interface SliderButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}
const SliderButtons = ({ onPrev, onNext, className }: SliderButtonsProps) => {
  return (
    <div className={`slider-buttons ${className}`}>
      <button
        className="slider-buttons__button slider-buttons__button--prev"
        onClick={onPrev}
        aria-label="Previous project slide"
      >
        <ArrowLeft />
      </button>

      <button
        className="slider-buttons__button slider-buttons__button--next"
        onClick={onNext}
        aria-label="Next project slide"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default SliderButtons;
