import type { ProcessStep } from "@/components/portfolio/types";

type ProcessSectionProps = {
  items: readonly ProcessStep[];
};

export default function ProcessSection({ items }: ProcessSectionProps) {
  return (
    <section id="process" className="dh-section process-section">
      <div className="section-head" data-fade>
        <p className="eyebrow">Workflow</p>
        <h2>Production pipeline for consistent, scalable motion output.</h2>
      </div>

      <div className="process-grid">
        {items.map((item) => (
          <article className="process-card" key={item.step} data-fade>
            <span className="process-step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
