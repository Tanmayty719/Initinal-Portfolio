import { motion } from "framer-motion";
import { firstRow, secondRow } from "../../data/techStack";
import TechCard from "./TechCard";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
    },
  }),
};

const TechStack = () => {
  const technologies = [...firstRow, ...secondRow];

  return (
    <section
      id="tech"
      className="relative py-28 overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.35em] text-sky-400 text-sm">
            Technologies
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Tech Stack
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg leading-8">
            I enjoy building modern, scalable and responsive web applications
            using technologies across the full stack. Here are the tools I work
            with regularly.
          </p>
        </motion.div>

        {/* Tech Cards */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-20">

          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <TechCard tech={tech} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TechStack;