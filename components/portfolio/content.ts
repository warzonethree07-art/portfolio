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
  { value: "40+", label: "Motion Projects" },
  { value: "3+", label: "Years Practice" },
  { value: "6", label: "Design Systems Built" },
  { value: "100%", label: "Handcrafted Frames" }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "Define audience, message clarity, and the visual hook before production starts."
  },
  {
    step: "02",
    title: "Styleframes",
    description: "Create frame direction for typography, composition, and transition behavior."
  },
  {
    step: "03",
    title: "Animation",
    description: "Build motion with timing systems, easing logic, and intentional visual rhythm."
  },
  {
    step: "04",
    title: "Delivery",
    description: "Ship optimized cuts for web and social with reusable templates and assets."
  }
];

export const tickerWords = ["motion stories", "brand sequences", "scroll-stopping reels", "visual systems", "motion stories"];

export const marqueeItems = [
  "After Effects",
  "CSE @ IIIT Raichur",
  "Motion Graphics",
  "Kinetic Typography",
  "Compositing",
  "Visual Storytelling"
];
