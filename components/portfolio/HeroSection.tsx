import type { SectionId } from "@/components/portfolio/types";

type HeroSectionProps = {
  onNavClick: (sectionId: SectionId) => void;
  tickerWords: readonly string[];
};

export default function HeroSection({ onNavClick, tickerWords }: HeroSectionProps) {
  return (
    <section id="hero" className="dh-hero">
      <div className="hero-inner">
        <p className="intro-line hero-kicker">Portfolio / 2026</p>
        <h1 className="intro-line hero-title">Turning ideas into</h1>

        <div className="intro-line word-loop" aria-hidden>
          <div className="word-track">
            {tickerWords.map((word, index) => (
              <span key={`${word}-${index}`}>{word}</span>
            ))}
          </div>
        </div>

        <p className="intro-line hero-copy">
          Sajith, CSE @ IIIT Raichur 2023. Motion Graphics Designer building high-retention visuals with sharp pacing,
          expressive typography, and clean transition systems.
        </p>

        <div className="intro-line hero-strip">
          <span>Available for freelance</span>
          <span>Based in India</span>
          <span>Remote worldwide</span>
        </div>

        <div className="intro-line hero-actions">
          <a href="#projects" className="cta cta-primary" onClick={() => onNavClick("projects")}>
            View Work
          </a>
          <a href="#contact" className="cta cta-ghost" onClick={() => onNavClick("contact")}>
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
