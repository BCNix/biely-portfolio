import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiReactrouter,
  SiVite,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiNetlify,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavaLine } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";

export const stacks = [
  {
    id: 1,
    category: "Languages",
    items: [
      {
        id: 1,
        name: "HTML",
        icon: SiHtml5,
        description: "Semantic markup for structuring web content",
      },
      {
        id: 2,
        name: "CSS",
        icon: IoLogoCss3,
        description: "Styling, layout, and responsive design",
      },
      {
        id: 3,
        name: "JavaScript",
        icon: SiJavascript,
        description: "Core logic, DOM manipulation, and interactivity",
      },
      {
        id: 4,
        name: "TypeScript",
        icon: SiTypescript,
        description: "Type-safe JavaScript for scalable, maintainable code",
      },
      {
        id: 5,
        name: "Python",
        icon: SiPython,
        description: "General-purpose scripting and problem solving",
      },
      {
        id: 6,
        name: "Java",
        icon: RiJavaLine,
        description: "Object-oriented programming fundamentals",
      },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    items: [
      {
        id: 1,
        name: "React",
        icon: SiReact,
        description: "Component-based UI development",
      },
      {
        id: 2,
        name: "React Router",
        icon: SiReactrouter,
        description: "Client-side routing and navigation",
      },
      {
        id: 3,
        name: "Vite",
        icon: SiVite,
        description: "Fast build tooling and dev environment",
      },
      {
        id: 4,
        name: "Figma",
        icon: SiFigma,
        description: "UI design and prototyping",
      },
    ],
  },
  {
    id: 3,
    category: "Backend & Data",
    items: [
      {
        id: 1,
        name: "Firebase",
        icon: SiFirebase,
        description: "Real-time database, auth, and hosting",
      },
    ],
  },
  {
    id: 4,
    category: "Tools",
    items: [
      {
        id: 1,
        name: "Git",
        icon: SiGit,
        description: "Version control and change tracking",
      },
      {
        id: 2,
        name: "GitHub",
        icon: SiGithub,
        description: "Code hosting, collaboration, and deployment",
      },
      {
        id: 3,
        name: "VS Code",
        icon: VscVscodeInsiders,
        description: "Primary code editor",
      },
      {
        id: 4,
        name: "Netlify",
        icon: SiNetlify,
        description: "Deployment and hosting for static sites",
      },
    ],
  },
];
