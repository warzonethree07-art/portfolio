import type { ProjectType } from "@/data/projects";

export type FilterType = "All" | ProjectType;
export type SectionId = "hero" | "projects" | "about" | "process" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};
