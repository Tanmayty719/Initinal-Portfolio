import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0d0f14] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-500/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/[0.035] blur-[130px]" />

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
              Experience
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            Where I gained real-world experience.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Hands-on development experience through live client work,
            collaboration, debugging, and practical web development.
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mt-14">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              className="relative"
            >
              <div className="grid lg:grid-cols-[170px_1fr] lg:gap-10">

                {/* Left meta */}
                <div className="relative pb-8 lg:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300">
                      <FaBriefcase className="text-sm" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Internship
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-300">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500 lg:pl-1">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-cyan-400/70" />
                    {exp.location}
                  </div>

                  {/* Timeline */}
                  <div className="absolute left-5 top-14 hidden h-[calc(100%-42px)] w-px bg-gradient-to-b from-violet-400/40 to-transparent lg:block" />
                </div>

                {/* Main content */}
                <div className="border-t border-white/[0.08] pt-8 lg:border-t-0 lg:pt-0">
                  <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/20 sm:p-8 lg:p-9">

                    {/* Company + Role */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-violet-300">
                          {exp.company}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {exp.role}
                        </h3>
                      </div>

                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5 text-xs font-medium text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Client-facing experience
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                      {exp.description}
                    </p>

                    {/* Contributions */}
                    <div className="mt-8">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                          Key Contributions
                        </h4>

                        <span className="h-px flex-1 bg-white/[0.06]" />
                      </div>

                      <div className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                        {exp.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 border-t border-white/[0.07] pt-7">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                          Technologies
                        </h4>

                        <span className="h-px flex-1 bg-white/[0.06]" />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-medium text-slate-300 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client project */}
                    <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-black/10 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">
                          Printed Sports Balls
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Live client website contribution during the
                          internship.
                        </p>
                      </div>

                      
                    </div>

                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
