import { RefObject, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FilterType, SectionId } from "@/components/portfolio/types";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useGsapPortfolioAnimations(rootRef: RefObject<HTMLElement>, activeFilter: FilterType) {
  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".intro-line",
        { y: 56, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.95, stagger: 0.14, ease: "power3.out" }
      );

      gsap.to(".hero-inner", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%"
            }
          }
        );
      });
    }, rootRef);

    return () => context.revert();
  }, [rootRef]);

  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".project-item",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.56, stagger: 0.08, ease: "power2.out" }
      );
    }, rootRef);

    return () => context.revert();
  }, [activeFilter, rootRef]);
}

export function useActiveSectionObserver(
  sectionIds: readonly SectionId[],
  setActiveSection: (sectionId: SectionId) => void
) {
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: "-34% 0px -52% 0px",
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds, setActiveSection]);
}

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
}

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (locked) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}

export function useEscapeHandler(enabled: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [enabled, onEscape]);
}
