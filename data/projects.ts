export type ProjectType = "Computer Vision" | "Medical AI" | "Bioinformatics" | "Image Processing";

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
    title: "Hand Gesture Detection",
    client: "Personal Project",
    type: "Computer Vision",
    year: "2025",
    result: "Real-Time Gesture Recognition",
    description:
      "Built a webcam-based hand gesture detection pipeline using landmark tracking and a lightweight classifier for live interaction.",
    tools: ["Python", "OpenCV", "MediaPipe"],
    thumbnail: "/project-1.svg",
    link: "https://github.com/"
  },
  {
    title: "Pneumonia Detection",
    client: "Academic Project",
    type: "Medical AI",
    year: "2024",
    result: "Chest X-ray Screening Model",
    description:
      "Trained and evaluated a deep learning model to identify pneumonia patterns from chest X-ray images with a clinically oriented workflow.",
    tools: ["Python", "TensorFlow", "CNN"],
    thumbnail: "/project-2.svg",
    link: "https://github.com/"
  },
  {
    title: "Real-Time Object Classification",
    client: "Personal Project",
    type: "Computer Vision",
    year: "2024",
    result: "Live Multi-Class Inference",
    description:
      "Implemented a low-latency object classification system for camera streams with optimized preprocessing and fast frame inference.",
    tools: ["PyTorch", "OpenCV", "ONNX Runtime"],
    thumbnail: "/project-3.svg",
    link: "https://github.com/"
  },
  {
    title: "Gene Expression Based Cancer Classification",
    client: "Research Project",
    type: "Bioinformatics",
    year: "2024",
    result: "Cancer Subtype Prediction",
    description:
      "Developed a machine learning pipeline using gene expression features to classify cancer types and compare model behavior across datasets.",
    tools: ["Python", "scikit-learn", "Pandas"],
    thumbnail: "/project-4.svg",
    link: "https://github.com/"
  },
  {
    title: "Old Image Restoration",
    client: "Personal Project",
    type: "Image Processing",
    year: "2023",
    result: "Damage-Aware Photo Recovery",
    description:
      "Created an image restoration workflow to recover old and damaged photos using denoising, enhancement, and reconstruction techniques.",
    tools: ["Python", "OpenCV", "Image Enhancement"],
    thumbnail: "/project-5.svg",
    link: "https://github.com/"
  }
];

export const projectFilters: ("All" | ProjectType)[] = ["All", "Computer Vision", "Medical AI", "Bioinformatics", "Image Processing"];
