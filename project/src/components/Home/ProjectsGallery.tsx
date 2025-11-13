import { PROJECTS_GALLERY_DATA } from "../../script/data";
import Button from "../Button";

const ProjectsGallery = () => {
  return (
    <section className="projects-gallery">
      <header className="projects-gallery__header">
        <h2 className="projects-gallery__title">Our Projects</h2>
      </header>

      <ul className="projects-gallery__grid">
        {PROJECTS_GALLERY_DATA.slice(0, 5).map((project) => {
          return (
            <li className="projects-gallery__item" key={project.id}>
              <div className="projects-gallery__image-wrapper" key={project.id}>
                <img
                  className="projects-gallery__image"
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.width}
                  height={project.height}
                />

                <div className="projects-gallery__overlay">
                  <h3 className="projects-gallery__overlay-title h2">
                    {project.title}
                  </h3>
                  <Button
                    className="projects-gallery__overlay-button"
                    to="/"
                    label="View More"
                    theme="transparent"
                  >
                    View More
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Button
        className="projects-gallery__button"
        label="All Projects"
        theme="dark"
        to="/projects"
      >
        All Projects
      </Button>
    </section>
  );
};

export default ProjectsGallery;
