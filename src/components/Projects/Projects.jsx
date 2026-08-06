import { motion } from "framer-motion";
import { featuredProject, projects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="text-sky-400 uppercase tracking-[0.3em] text-sm">
            Portfolio
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            A collection of projects that demonstrate my experience
            in full-stack web development, client collaboration and
            modern UI development.
          </p>

        </motion.div>

        {/* Featured Project */}

        <FeaturedProject project={featuredProject} />

        {/* Other Projects */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mt-16"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;