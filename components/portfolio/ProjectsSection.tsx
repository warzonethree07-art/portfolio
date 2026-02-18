import { projectFilters, type Project } from "@/data/projects";
import type { FilterType } from "@/components/portfolio/types";

type ProjectsSectionProps = {
  activeFilter: FilterType;
  filterCounts: Record<FilterType, number>;
  onFilterChange: (filter: FilterType) => void;
  projects: Project[];
};

export default function ProjectsSection({
  activeFilter,
  filterCounts,
  onFilterChange,
  projects
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="dh-section">
      <div className="section-head" data-fade>
        <p className="eyebrow">Featured Projects</p>
        <h2>AI and computer vision projects built for practical performance.</h2>
      </div>

      <div className="filter-row" data-fade>
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? "filter-btn active" : "filter-btn"}
            onClick={() => onFilterChange(filter)}
            aria-pressed={activeFilter === filter}
          >
            <span>{filter}</span>
            <span className="filter-count">{filterCounts[filter]}</span>
          </button>
        ))}
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={index === 0 ? "project-item featured" : "project-item"} key={project.title}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div
                className="project-media"
                style={{
                  backgroundImage: `linear-gradient(140deg, rgba(214, 222, 172, 0.2), rgba(10, 10, 10, 0.52)), url(${project.thumbnail})`
                }}
                role="img"
                aria-label={`${project.title} thumbnail`}
              >
                <span className="result-badge">{project.result}</span>
                <span className="media-cta">Open project {"->"}</span>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <div className="tag-row">
                    <span className="tag-pill">{project.type}</span>
                    {project.tools.slice(0, 2).map((tool) => (
                      <span className="tag-pill muted" key={`${project.title}-${tool}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="project-link">View Case</span>
                </div>
              </div>
            </a>
          </article>
        ))}
        {!projects.length && <p className="empty-state">No projects available in this filter yet.</p>}
      </div>
    </section>
  );
}
