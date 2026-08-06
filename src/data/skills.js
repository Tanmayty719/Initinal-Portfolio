import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiRender,
  SiCloudinary,
  SiSocketdotio,
  SiJsonwebtokens,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        description:
          "Building responsive user interfaces using reusable components and React Router.",
        tags: ["Hooks", "Components", "Router"],
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        description:
          "Writing modern ES6+ JavaScript to build interactive web applications.",
        tags: ["ES6+", "DOM", "Async"],
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description:
          "Creating responsive, clean and modern UI with utility-first CSS.",
        tags: ["Responsive", "Flexbox", "Grid"],
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        description:
          "Building scalable backend services using Express and REST APIs.",
        tags: ["Express", "REST", "JWT"],
      },
      {
        name: "Socket.IO",
        icon: SiSocketdotio,
        description:
          "Implementing real-time communication for live applications.",
        tags: ["Realtime", "Events"],
      },
      {
        name: "Cloudinary",
        icon: SiCloudinary,
        description:
          "Managing image uploads and cloud-based media storage.",
        tags: ["Images", "CDN"],
      },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        description:
          "Designing NoSQL databases and working with Mongoose models.",
        tags: ["CRUD", "Atlas"],
      },
      {
        name: "Git & GitHub",
        icon: FaGithub,
        description:
          "Version control, collaboration and source code management.",
        tags: ["Git", "Branches"],
      },
      {
        name: "WordPress",
        icon: FaWordpress,
        description:
          "Worked on a live client website using Elementor and Fancy Product Designer.",
        tags: ["Elementor", "FPD"],
      },
    ],
  },
];