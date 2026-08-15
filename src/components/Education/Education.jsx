import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";

import { education } from "../../data/education";

const Education = () => {
  return (
    <section
      id="education"
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
              Education
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            Academic background.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            My academic journey has given me a foundation in computer science,
            software development, problem solving, and technology.
          </p>
        </motion.div>

        {/* ================= EDUCATION ================= */}

        <div className="mt-14">

          {/* Primary education */}

          {education.slice(0, 2).map((item, index) => (
            <motion.article
              key={`${item.degree}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                mb-5
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-violet-400/20
                sm:p-8
              "
            >
              <div className="grid gap-7 lg:grid-cols-[100px_1fr_auto] lg:items-start">

                {/* Icon */}

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-violet-300">
                    <FaGraduationCap className="text-lg" />
                  </div>
                </div>

                {/* Main content */}

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                      {item.status === "Currently Pursuing"
                        ? "Current"
                        : "Completed"}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-700" />

                    <span className="text-xs text-slate-500">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-base font-medium text-slate-300">
                    {item.specialization}
                  </p>

                  <p className="mt-3 text-sm text-slate-500">
                    {item.institute || "Institution details to be updated"}
                  </p>

                  {/* CGPA */}

                  {item.cgpa !== "-" && item.cgpa && (
                    <div className="mt-6">
                      <span className="text-xs uppercase tracking-[0.18em] text-slate-600">
                        Academic Score
                      </span>

                      <p className="mt-1 text-lg font-semibold text-white">
                        {item.cgpa}
                      </p>
                    </div>
                  )}

                  {/* Coursework */}

                  {item.subjects?.filter(Boolean).length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.subjects
                        .filter(Boolean)
                        .slice(0, 4)
                        .map((subject) => (
                          <span
                            key={subject}
                            className="
                              rounded-lg
                              border
                              border-white/[0.07]
                              bg-white/[0.025]
                              px-3
                              py-1.5
                              text-xs
                              text-slate-400
                            "
                          >
                            {subject}
                          </span>
                        ))}
                    </div>
                  )}
                </div>

                {/* Date */}

                <div className="hidden lg:block">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <FaCalendarAlt />
                    {item.duration}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* ================= EARLIER EDUCATION ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Earlier Education
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {education.slice(2).map((item, index) => (
                <motion.div
                  key={`${item.degree}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    p-5
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-slate-600">
                        {item.duration}
                      </p>

                      <h3 className="mt-2 text-base font-semibold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.specialization}
                      </p>

                      <p className="mt-2 text-xs text-slate-600">
                        {item.institute}
                      </p>
                    </div>

                    {item.cgpa !== "-" && item.cgpa && (
                      <span className="shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-xs font-medium text-slate-400">
                        {item.cgpa}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;