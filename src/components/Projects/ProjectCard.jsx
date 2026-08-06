import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sky-400 text-sm font-medium">
              {project.subtitle}
            </span>

            <h3 className="text-2xl font-bold mt-2">
              {project.title}
            </h3>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl group-hover:bg-sky-500 transition">
            {project.title.includes("Portfolio") ? "🎨" : "💼"}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-7 mt-6">
          {project.description}
        </p>

        {/* Responsibilities */}
        <div className="mt-8">
          <h4 className="font-semibold mb-4">
            Highlights
          </h4>

          <div className="space-y-3">
            {project.responsibilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-slate-300"
              >
                <FaArrowRight className="text-sky-400 text-sm" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded-xl transition"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-slate-700 hover:border-sky-400 px-5 py-3 rounded-xl transition"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;