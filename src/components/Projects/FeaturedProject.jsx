import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

const FeaturedProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 hover:border-sky-400 transition-all duration-500"
    >
      <div className="flex flex-col">

        {/* LEFT IMAGE */}

        <div className="bg-slate-950 p-6">
  <img
    src={project.image}
    alt={project.title}
    className="w-full rounded-2xl border border-slate-800 object-cover transition duration-700 group-hover:scale-[1.02]"
  />
</div>

        {/* RIGHT CONTENT */}

        <div className="p-8 md:p-10 lg:p-12">

          <span className="text-sky-400 font-medium">
            ⭐ Featured Project
          </span>

          <h2 className="text-4xl font-bold mt-3">
            {project.title}
          </h2>

          <h3 className="text-slate-400 mt-2 text-lg">
            {project.subtitle}
          </h3>

          <p className="mt-8 text-slate-300 leading-8">
            {project.description}
          </p>

          {/* FEATURES */}

          <div className="mt-10">

            <h4 className="font-semibold mb-5 text-xl">
              Key Features
            </h4>

            <div className="grid md:grid-cols-2 gap-4">

              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-sky-400" />

                  <span className="text-slate-300">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* TECH */}

          <div className="mt-10">

            <h4 className="font-semibold mb-4">
              Tech Stack
            </h4>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm hover:border-sky-400 transition"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-medium"
            >
              <FaGithub />

              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-slate-700 hover:border-sky-400 transition px-6 py-3 rounded-xl font-medium"
            >
              <FaExternalLinkAlt />

              Live Demo
            </a>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default FeaturedProject;