import { motion } from "framer-motion";
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaLayerGroup,
} from "react-icons/fa";

const stats = [
  {
    value: "3+",
    label: "Featured Projects",
    icon: FaCode,
  },
  {
    value: "1",
    label: "Client Internship",
    icon: FaBriefcase,
  },
  {
    value: "MERN",
    label: "Primary Stack",
    icon: FaLayerGroup,
  },
  {
    value: "7.83",
    label: "B.Sc. CGPI",
    icon: FaGraduationCap,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0d0f14] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-violet-400 to-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            Building with curiosity,
            <span className="block text-slate-500">
              learning with purpose.
            </span>
          </h2>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* LEFT — STORY */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-8 text-slate-300">
              I'm a{" "}
              <span className="font-semibold text-white">
                Full Stack Web Developer
              </span>{" "}
              focused on building responsive, practical and user-focused web
              applications.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              My primary stack is MERN, and I enjoy working across the
              frontend and backend — from designing React interfaces to
              building REST APIs, authentication systems and real-time
              functionality with Socket.IO.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              During my internship at{" "}
              <span className="font-medium text-white">
                V-Arts Services Pvt. Ltd.
              </span>
              , I contributed to a live client website, working with
              WordPress, Elementor, Fancy Product Designer, custom CSS,
              debugging and frontend improvements.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              I'm continuously expanding my knowledge through projects,
              hands-on development and learning modern software engineering
              practices.
            </p>

            {/* Small principle */}

            <div className="mt-8 flex items-center gap-3 border-l border-violet-400/40 pl-4">
              <span className="h-2 w-2 rounded-full bg-violet-400" />

              <p className="text-sm font-medium text-slate-300">
                Build. Learn. Improve. Repeat.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — SNAPSHOT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Developer Snapshot
            </p>

            <div className="mt-7 space-y-6">

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Primary Focus
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Full Stack Web Development
                </p>
              </div>

              <div className="border-t border-white/[0.07] pt-6">
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Core Stack
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  React · Node.js · Express · MongoDB
                </p>
              </div>

              <div className="border-t border-white/[0.07] pt-6">
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Real-World Experience
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Live Client WordPress Project
                </p>
              </div>

              <div className="border-t border-white/[0.07] pt-6">
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Current Goal
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Grow as a Full Stack Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 border-y border-white/[0.07] sm:grid-cols-4"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="
                  group
                  border-r
                  border-white/[0.07]
                  px-5
                  py-8
                  last:border-r-0
                  sm:px-6
                "
              >
                <Icon className="text-sm text-violet-400 transition-transform duration-300 group-hover:-translate-y-1" />

                <p className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {item.value}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;