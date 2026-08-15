import { motion } from "framer-motion";
import { featuredProject, projects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0d0f14] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-violet-500/[0.05] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-160px] bottom-20 h-[380px] w-[380px] rounded-full bg-cyan-400/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-violet-400 to-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            Projects that show what I build.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A mix of full-stack applications, real client work, and personal
            projects built to strengthen my development skills.
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="mt-14">
          <FeaturedProject project={featuredProject} />
        </div>

        {/* Secondary projects */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;