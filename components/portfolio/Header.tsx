"use client";

import { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { Instagram, Linkedin, Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import type { NavItem, SectionId } from "@/components/portfolio/types";

type HeaderProps = {
  activeSection: SectionId;
  mobileOpen: boolean;
  navItems: readonly NavItem[];
  onCloseMenu: () => void;
  onNavClick: (sectionId: SectionId) => void;
  onToggleMenu: () => void;
};

type ViewTransition = {
  ready: Promise<void>;
};

type DocumentWithTransition = Document & {
  startViewTransition?: (update: () => void) => ViewTransition;
};

export default function Header({
  activeSection,
  mobileOpen,
  navItems,
  onCloseMenu,
  onNavClick,
  onToggleMenu
}: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme !== "light" : true;
  const toggleTheme = (event: ReactMouseEvent<HTMLButtonElement>) => {
    if (!mounted) {
      return;
    }

    const nextTheme = isDark ? "light" : "dark";
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transitionDoc = document as DocumentWithTransition;

    if (!transitionDoc.startViewTransition || shouldReduceMotion) {
      setTheme(nextTheme);
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = transitionDoc.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
          },
          {
            duration: 1000,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)"
          }
        );
      })
      .catch(() => {
        setTheme(nextTheme);
      });
  };

  const toggleLabel = mounted
    ? isDark
      ? "Switch to light theme"
      : "Switch to dark theme"
    : "Toggle theme";

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
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={toggleLabel}
              title={toggleLabel}
            >
              {isDark ? <Sun size={14} aria-hidden /> : <Moon size={14} aria-hidden />}
            </button>
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
            <button type="button" className="mobile-theme-toggle" onClick={toggleTheme} aria-label={toggleLabel}>
              {isDark ? "Light theme" : "Dark theme"}
            </button>
          </div>
        </div>
      </div>
      <div className={mobileOpen ? "mobile-backdrop open" : "mobile-backdrop"} aria-hidden onClick={onCloseMenu} />
    </>
  );
}
