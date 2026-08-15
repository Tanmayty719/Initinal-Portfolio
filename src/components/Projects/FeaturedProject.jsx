import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

const FeaturedProject = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        backdrop-blur-sm
      "
    >
      {/* Top label */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
          01 / Featured Project
        </span>

        <span className="hidden text-xs text-slate-600 sm:block">
          Full-Stack Application
        </span>
      </div>

      {/* Project image */}
      <div className="overflow-hidden bg-[#08090d] p-4 sm:p-6 lg:p-8">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
          <motion.img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="
              block
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.015]
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-10">

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-violet-300">
              {project.subtitle}
            </p>

            <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-slate-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-500
                    to-cyan-400
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]
                  "
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.1]
                    bg-white/[0.03]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-violet-400/30
                    hover:bg-white/[0.06]
                  "
                >
                  <FaGithub className="text-sm" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right — features */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Key Features
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="space-y-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-slate-400"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-violet-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;