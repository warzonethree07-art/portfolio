import { Instagram, Linkedin, Palette } from "lucide-react";
import type { NavItem, SectionId } from "@/components/portfolio/types";

type HeaderProps = {
  activeSection: SectionId;
  mobileOpen: boolean;
  navItems: readonly NavItem[];
  onCloseMenu: () => void;
  onNavClick: (sectionId: SectionId) => void;
  onToggleMenu: () => void;
};

export default function Header({
  activeSection,
  mobileOpen,
  navItems,
  onCloseMenu,
  onNavClick,
  onToggleMenu
}: HeaderProps) {
  return (
    <>
      <header className="dh-nav">
        <div className="nav-inner">
          <a href="#hero" className="brand" aria-label="Go to top" onClick={() => onNavClick("hero")}>
            <span className="brand-mark">S</span>
            <span>Sajith Studio</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => onNavClick(item.id)}
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="social-mini" aria-label="Social links">
            <a href="https://www.behance.net" target="_blank" rel="noreferrer" aria-label="Behance">
              <Palette size={14} aria-hidden />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={14} aria-hidden />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={14} aria-hidden />
            </a>
          </div>

          <button
            type="button"
            className="menu-toggle"
            onClick={onToggleMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={mobileOpen ? "mobile-menu open" : "mobile-menu"} id="mobile-menu" role="dialog" aria-modal="true">
        <div className="mobile-menu-inner">
          <p>Menu</p>
          <nav aria-label="Mobile primary navigation">
            {navItems.map((item) => (
              <a
                key={`mobile-${item.id}`}
                href={`#${item.id}`}
                onClick={() => onNavClick(item.id)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-socials">
            <a href="https://www.behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className={mobileOpen ? "mobile-backdrop open" : "mobile-backdrop"} aria-hidden onClick={onCloseMenu} />
    </>
  );
}
