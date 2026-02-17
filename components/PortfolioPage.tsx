"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import MarqueeStrip from "@/components/portfolio/MarqueeStrip";
import ProcessSection from "@/components/portfolio/ProcessSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import StatsSection from "@/components/portfolio/StatsSection";
import {
  emailAddress,
  marqueeItems,
  navItems,
  processSteps,
  sectionIds,
  statItems,
  tickerWords
} from "@/components/portfolio/content";
import {
  useActiveSectionObserver,
  useBodyScrollLock,
  useEscapeHandler,
  useGsapPortfolioAnimations,
  useScrollProgress
} from "@/components/portfolio/hooks";
import type { FilterType, SectionId } from "@/components/portfolio/types";

export default function PortfolioPage() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  const filterCounts = useMemo(() => {
    const counts = { All: projects.length } as Record<FilterType, number>;
    projectFilters.forEach((filter) => {
      if (filter !== "All") {
        counts[filter] = projects.filter((project) => project.type === filter).length;
      }
    });
    return counts;
  }, []);

  useGsapPortfolioAnimations(rootRef, activeFilter);
  useActiveSectionObserver(sectionIds, setActiveSection);
  useBodyScrollLock(mobileOpen);
  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEscapeHandler(mobileOpen, closeMobileMenu);

  const scrollProgress = useScrollProgress();

  const handleCopyEmail = useCallback(async () => {
    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1600);
    } catch {
      setCopiedEmail(false);
    }
  }, []);

  const handleNavClick = useCallback((sectionId: SectionId) => {
    setActiveSection(sectionId);
    setMobileOpen(false);
  }, []);

  return (
    <main className="dh-page" ref={rootRef}>
      <a href="#projects" className="skip-link">
        Skip to content
      </a>
      <div className="dh-noise" aria-hidden />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden />

      <Header
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        navItems={navItems}
        onCloseMenu={closeMobileMenu}
        onNavClick={handleNavClick}
        onToggleMenu={() => setMobileOpen((value) => !value)}
      />

      <HeroSection onNavClick={handleNavClick} tickerWords={tickerWords} />
      <MarqueeStrip items={marqueeItems} />
      <ProjectsSection
        activeFilter={activeFilter}
        filterCounts={filterCounts}
        projects={visibleProjects}
        onFilterChange={setActiveFilter}
      />
      <AboutSection />
      <StatsSection items={statItems} />
      <ProcessSection items={processSteps} />
      <ContactSection copiedEmail={copiedEmail} emailAddress={emailAddress} onCopyEmail={handleCopyEmail} />
      <Footer onBackToTop={() => handleNavClick("hero")} />
    </main>
  );
}
