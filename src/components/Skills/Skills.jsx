import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#08090d] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute left-[-160px] top-1/4 h-96 w-96 rounded-full bg-cyan-400/[0.035] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[130px]" />

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
              Capabilities
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            What I build with my skills.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I work across the stack to turn ideas into responsive interfaces,
            reliable APIs, data-driven applications, and practical digital
            experiences.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-14 space-y-14">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Category heading */}
              <div className="mb-6 flex items-end justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>

                  {category.description && (
                    <p className="mt-2 text-sm text-slate-500">
                      {category.description}
                    </p>
                  )}
                </div>

                <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-700 sm:block">
                  {String(category.skills.length).padStart(2, "0")} Skills
                </span>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-white/[0.07]" />

              {/* Cards */}
              <div
                className="
                  grid
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-14 flex items-center gap-2 text-sm text-slate-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Focused on clean code, practical solutions, and continuous learning.
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;