import { ForwardSlash } from "../script/icons";

interface SliderPaginationProps {
  current: number;
  total: number;
  className?: string;
}
const SliderPagination = ({ current, total, className }: SliderPaginationProps) => {
  const formatNumber = (num: number): string =>
    num < 10 ? `0${num}` : num.toString();

  return (
    <div className={`slider-pagination ${className}`} aria-live="polite" aria-atomic="true">
      <span className="slider-pagination__current-slide">
        {formatNumber(current)}
      </span>
      <span className="slider-pagination__separator">
        <ForwardSlash />
      </span>
      <span className="slider-pagination__total-slides">
        {formatNumber(total)}
      </span>
    </div>
  );
};

export { SliderPagination };
