import auctionImg from "../assets/projects/auction.png";
import portfolioImg from "../assets/projects/portfolio.png";

export const featuredProject = {
  id: 1,
  title: "Auction Centrall",
  subtitle: "Real-Time MERN Application",

  image: auctionImg,

  featured: true,

  description:
    "A full-stack online auction platform that enables users to create auctions, place real-time bids and securely manage listings. The application uses Socket.IO for live bidding, JWT authentication for secure access, Cloudinary for image uploads, and MongoDB for persistent data storage.",

  features: [
    "JWT Authentication",
    "Role-Based Access Control",
    "Real-Time Bidding with Socket.IO",
    "Cloudinary Image Uploads",
    "Admin Dashboard",
    "Auction Management",
    "Responsive UI",
  ],

  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "JWT",
    "Cloudinary",
    "Redux Toolkit",
    "React Query",
  ],

  github: null,

  live: "https://auction-centrall.netlify.app/",
};

export const projects = [
  {
    id: 2,

    title: "Printed Sports Balls",

    subtitle: "Client Contribution • Internship",

    image: null,

    description:
      "Contributed to a live client website during my internship at V-Arts Services Pvt. Ltd., working on WordPress customization, Elementor layouts, Fancy Product Designer integration, debugging, UI enhancements and responsive improvements.",

    responsibilities: [
      "Customized WordPress pages",
      "Elementor Development",
      "Fancy Product Designer",
      "Responsive UI Improvements",
      "Custom CSS",
      "Debugging & Enhancements",
      "Client Requirement Implementation",
    ],

    technologies: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "CSS",
      "Git",
    ],

    github: null,

    live: "https://printedsportsballs.co.uk",
  },

  {
    id: 3,

    title: "Developer Portfolio",

    subtitle: "Personal Project",

    image: portfolioImg,

    description:
      "A modern developer portfolio built with React, Tailwind CSS and Framer Motion to showcase projects, skills and professional experience through a responsive and interactive interface.",

    responsibilities: [
      "Responsive Design",
      "Reusable Components",
      "Modern UI/UX",
      "Framer Motion Animations",
      "SEO Optimization",
      "Vercel Deployment",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],

    github: "https://github.com/Tanmayty719/Initinal-Portfolio",

    live: "https://my-portfolio-tvk-one.vercel.app/",
  },
];