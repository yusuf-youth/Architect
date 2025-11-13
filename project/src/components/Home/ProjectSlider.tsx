import img from "../../../public/images/project-forum.png";
import TitleBlock from "../TitleBlock";
import SliderButtons from "../SliderButtons";
import { SliderPagination } from "../SliderPagination";
import Button from "../Button";

function ProjectSlider() {
  return (
    <section className="project-slider">
      <div className="project-slider__content">
        <TitleBlock pretitle="PROJECT" title="Lorum" />
        <SliderButtons className="hidden-mobile" />
        <SliderPagination className="hidden-mobile" current={1} total={5} />
      </div>

      <div className="project-slider__image-container">
        <img
          className="project-slider__image"
          src={img}
          alt="Minimalist white stacked modern building exterior"
          width="670"
        />

        <Button
          className="project-slider__button"
          to="/sample-project"
          label="View Project"
        >
          View Project
        </Button>
      </div>

      <div className="project-slider__controls visible-mobile">
        <SliderButtons />
        <SliderPagination current={1} total={5} />
      </div>
    </section>
  );
}

export default ProjectSlider;
