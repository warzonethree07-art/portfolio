import type { StatItem } from "@/components/portfolio/types";

type StatsSectionProps = {
  items: readonly StatItem[];
};

export default function StatsSection({ items }: StatsSectionProps) {
  return (
    <section className="dh-section stats-section" data-fade>
      <div className="stats-grid">
        {items.map((item) => (
          <article className="stat-card" key={item.label}>
            <p>{item.value}</p>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
