import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ project, index = 0 }) => {
  const isClientProject = project.title === "Printed Sports Balls";
  const isPortfolioProject = project.title === "Developer Portfolio";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{ y: -5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-violet-400/25
        hover:bg-white/[0.035]
        sm:p-8
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            {String(index + 2).padStart(2, "0")}
          </p>

          <p className="mt-5 text-sm font-medium text-violet-300">
            {project.subtitle}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
        </div>

        <span
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.08]
            bg-white/[0.03]
            text-xs
            font-semibold
            text-slate-500
            transition
            duration-300
            group-hover:border-violet-400/30
            group-hover:text-violet-300
          "
        >
          {isClientProject ? "01" : isPortfolioProject ? "02" : "03"}
        </span>
      </div>

      {/* Client note */}
      {isClientProject && (
        <div className="mt-6 rounded-xl border border-amber-400/10 bg-amber-400/[0.03] px-4 py-3">
          <p className="text-xs leading-5 text-amber-200/70">
            Client project contribution completed during internship.
            Project visuals are intentionally not displayed.
          </p>
        </div>
      )}

      {/* Description */}
      <p className="mt-6 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      {/* Highlights */}
      {project.responsibilities?.length > 0 && (
        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            Highlights
          </p>

          <div className="mt-4 space-y-2.5">
            {project.responsibilities.slice(0, 5).map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-slate-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies */}
      {project.technologies?.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-2.5
                py-1.5
                text-xs
                font-medium
                text-slate-400
              "
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.07] pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/[0.1]
              bg-white/[0.025]
              px-4
              py-2.5
              text-xs
              font-semibold
              text-slate-300
              transition
              hover:border-violet-400/30
              hover:text-white
            "
          >
            <FaGithub />
            GitHub
          </a>
        )}

        

        
        
      </div>
    </motion.article>
  );
};

export default ProjectCard;