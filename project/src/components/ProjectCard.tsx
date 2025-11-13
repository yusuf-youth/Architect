import type { OurProjectCard } from "../script/data";
import Button from "./Button";

interface ProjectCardProps {
  className?: string;
  data: OurProjectCard;
}

const ProjectCard = ({ className, data }: ProjectCardProps) => {
  const { image, imageAlt, title, text, path } = data;

  return (
    <article className="projects__card project-card">
      <div className="project-card__media">
        <img
          className={className}
          src={image}
          alt={imageAlt}
          width={670}
          height={435}
        />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__text">{text}</p>
        <Button className="project-card__button" to={path} label="View More">
          View More
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
