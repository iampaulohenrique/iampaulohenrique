import type { Project } from "../types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

/** Card de projeto regular — usado para KeebStore e Vortex Task System */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card glass-card">
      <div className="project-card__image-wrapper">
        <img className="project-card__image" alt={project.imageAlt} src={project.imageUrl} />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span className="project-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <a className="project-card__link underline-animate" href={project.liveUrl ?? "#"}>
          DETAILS
          <span className="material-symbols-outlined project-card__link-icon">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
