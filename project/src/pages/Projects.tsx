import TitleBlock from "../components/TitleBlock";
import { SliderPagination } from "../components/SliderPagination";
import SliderButtons from "../components/SliderButtons";
import { PROJECT_CARDS_DATA } from "../script/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="projects">
      <header className="projects__header">
        <TitleBlock
          className="projects__title-block"
          pretitle="Our"
          title="Projects"
        />
      </header>

      <div className="projects__body">
        <ul className="projects__list">
          {PROJECT_CARDS_DATA.map((card) => (
            <li className="projects__item" key={card.id}>
              <ProjectCard data={{...card}} />
            </li>
          ))}
        </ul>

        <div className="projects__controls">
          <SliderPagination
            className="projects__pagination"
            current={1}
            total={5}
          />

          <SliderButtons className="projects__slider-buttons" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
