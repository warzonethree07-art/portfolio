export type ProjectType = "Motion Graphics" | "Brand Film" | "Title Sequence" | "Social Reel";

export type Project = {
  title: string;
  client: string;
  type: ProjectType;
  year: string;
  result: string;
  description: string;
  tools: string[];
  thumbnail: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Neon Pulse Campaign",
    client: "RecruiterOne",
    type: "Motion Graphics",
    year: "2025",
    result: "+184% Watch Time",
    description: "High-intensity campaign with kinetic type, rhythmic cuts, and layered compositing for social launch.",
    tools: ["After Effects", "Motion Design", "Sound Sync"],
    thumbnail: "/project-1.svg",
    link: "https://www.behance.net/"
  },
  {
    title: "Optimo Reveal Film",
    client: "Optimo Autohaus",
    type: "Brand Film",
    year: "2024",
    result: "+72% Lead Quality",
    description: "Product reveal sequence combining cinematic pacing, 3D-like depth cues, and premium transitions.",
    tools: ["After Effects", "Brand Systems", "Compositing"],
    thumbnail: "/project-2.svg",
    link: "https://www.behance.net/"
  },
  {
    title: "Kooki Opener",
    client: "Kooki",
    type: "Title Sequence",
    year: "2024",
    result: "+126% Retention",
    description: "Fast editorial title package with custom glyph timing and punchy frame-to-frame motion beats.",
    tools: ["Kinetic Typography", "Timing", "Styleframes"],
    thumbnail: "/project-3.svg",
    link: "https://www.behance.net/"
  },
  {
    title: "IIIT Fest Social Kit",
    client: "IIIT Raichur",
    type: "Social Reel",
    year: "2023",
    result: "+210K Organic Views",
    description: "Multi-format social motion kit designed for event announcements, countdowns, and post-event recaps.",
    tools: ["After Effects", "Template Systems", "Motion Toolkit"],
    thumbnail: "/project-4.svg",
    link: "https://www.behance.net/"
  },
  {
    title: "Spectrum Type Study",
    client: "Independent",
    type: "Motion Graphics",
    year: "2023",
    result: "+93% Completion Rate",
    description: "Experimental type study focused on contrast, pacing, and expressive letter animation structures.",
    tools: ["Motion Design", "Typography", "Color Direction"],
    thumbnail: "/project-5.svg",
    link: "https://www.behance.net/"
  },
  {
    title: "Aura Launch Snippets",
    client: "Aura",
    type: "Social Reel",
    year: "2023",
    result: "-38% Bounce",
    description: "Short-form launch reels optimized for mobile attention spans with rapid hook-first intros.",
    tools: ["Storyboarding", "Editing", "Micro Interactions"],
    thumbnail: "/project-6.svg",
    link: "https://www.behance.net/"
  }
];

export const projectFilters: ("All" | ProjectType)[] = [
  "All",
  "Motion Graphics",
  "Brand Film",
  "Title Sequence",
  "Social Reel"
];