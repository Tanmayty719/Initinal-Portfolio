import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiCloudinary,
  SiSocketdotio,
  SiJsonwebtokens,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive and user-focused interfaces.",
    skills: [
      {
        name: "React.js",
        icon: FaReact,
        description:
          "Building reusable interfaces and component-driven applications with React.",
        tags: ["Components", "Hooks", "Router"],
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        description:
          "Using modern JavaScript to create interactive and dynamic web experiences.",
        tags: ["ES6+", "Async", "DOM"],
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description:
          "Creating responsive layouts and modern interfaces with utility-first CSS.",
        tags: ["Responsive", "Flexbox", "Grid"],
      },
    ],
  },

  {
    title: "Backend & APIs",
    description:
      "Developing server-side logic, APIs and real-time functionality.",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        description:
          "Building backend services and server-side applications with Node.js.",
        tags: ["Runtime", "Express", "REST"],
      },
      {
        name: "Express.js",
        icon: SiExpress,
        description:
          "Developing RESTful APIs and structuring backend application logic.",
        tags: ["REST API", "Middleware", "Routes"],
      },
      {
        name: "Socket.IO",
        icon: SiSocketdotio,
        description:
          "Implementing real-time communication for interactive web applications.",
        tags: ["Realtime", "Events", "Live Data"],
      },
      {
        name: "JWT Authentication",
        icon: SiJsonwebtokens,
        description:
          "Implementing secure authentication and protected application access.",
        tags: ["JWT", "Authorization", "Cookies"],
      },
    ],
  },

  {
    title: "Data & Development Tools",
    description:
      "Working with application data, APIs, version control and cloud services.",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        description:
          "Designing NoSQL data models and working with MongoDB and Mongoose.",
        tags: ["CRUD", "Mongoose", "Atlas"],
      },
      {
        name: "Git & GitHub",
        icon: FaGithub,
        description:
          "Managing source code, branches and collaboration workflows with Git.",
        tags: ["Git", "Branches", "Version Control"],
      },
      {
        name: "Postman",
        icon: SiPostman,
        description:
          "Testing and debugging REST APIs throughout the development process.",
        tags: ["API Testing", "Requests", "Debugging"],
      },
      {
        name: "Cloudinary",
        icon: SiCloudinary,
        description:
          "Managing cloud-based image uploads and media storage.",
        tags: ["Uploads", "Media", "Cloud"],
      },
    ],
  },

  {
    title: "CMS & Client Development",
    description:
      "Building and customizing production websites for real-world requirements.",
    skills: [
      {
        name: "WordPress",
        icon: FaWordpress,
        description:
          "Customizing WordPress websites and implementing client-specific functionality.",
        tags: ["WordPress", "Plugins", "CMS"],
      },
      {
        name: "Frontend Debugging",
        icon: FaReact,
        description:
          "Debugging UI issues, fixing responsive problems and improving user experience.",
        tags: ["Debugging", "Responsive", "UI"],
      },
      {
        name: "Git Workflow",
        icon: FaGitAlt,
        description:
          "Working with version control and collaborative development workflows.",
        tags: ["Commits", "Branches", "Collaboration"],
      },
    ],
  },
];