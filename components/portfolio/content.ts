import type { NavItem, ProcessStep, SectionId, StatItem } from "@/components/portfolio/types";

export const emailAddress = "pavanpamuleti6840@gmail.com";

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "process", label: "Workflow" },
  { id: "contact", label: "Contact" }
];

export const sectionIds: SectionId[] = navItems.map((item) => item.id);

export const statItems: StatItem[] = [
  { value: "5", label: "Featured AI Projects" },
  { value: "3+", label: "Years of Coding" },
  { value: "4", label: "Project Domains" },
  { value: "B.Tech", label: "CSE @ IIIT Raichur" }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Problem Framing",
    description: "Define the task, dataset needs, and measurable success criteria before model development."
  },
  {
    step: "02",
    title: "Data Preparation",
    description: "Clean, transform, and structure the data pipeline for consistent training and evaluation."
  },
  {
    step: "03",
    title: "Modeling",
    description: "Train and tune ML or deep learning models with iterative validation and metric tracking."
  },
  {
    step: "04",
    title: "Deployment",
    description: "Integrate inference workflows into real-time or batch systems and verify reliability."
  }
];

export const tickerWords = ["computer vision", "medical ai", "real-time ml", "data pipelines", "computer vision"];

export const marqueeItems = [
  "B.Tech CSE @ IIIT Raichur",
  "Computer Vision",
  "Medical AI",
  "Image Processing",
  "Machine Learning",
  "Python"
];
