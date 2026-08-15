import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaWordpress,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiSocketdotio,
  SiJsonwebtokens,
  SiCloudinary,
  SiPostman,
  SiRender,
  SiElementor,
} from "react-icons/si";

const categories = [
  {
    number: "01",
    title: "Frontend",
    description: "Responsive interfaces and modern user experiences.",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "APIs, authentication and real-time functionality.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with relational and NoSQL data stores.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    number: "04",
    title: "Tools & CMS",
    description: "Development, deployment and content management.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "WordPress", icon: FaWordpress },
      { name: "Elementor", icon: SiElementor },
      { name: "Render", icon: SiRender },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-[#08090d] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-400/[0.04] blur-[130px]" />

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
              Technologies
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A focused set of tools I use to build full-stack applications,
            responsive interfaces, real-time features and production-ready
            web experiences.
          </p>
        </motion.div>

        {/* Technology rows */}
        <div className="mt-14 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {categories.map((category, index) => (
            <motion.div
              key={category.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
              className="grid gap-7 py-9 lg:grid-cols-[110px_200px_1fr] lg:items-start"
            >
              {/* Number */}
              <span className="text-xs font-semibold tracking-[0.22em] text-slate-600">
                {category.number}
              </span>

              {/* Category */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2.5
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        px-3.5
                        py-2.5
                        text-sm
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-violet-400/30
                        hover:bg-violet-500/[0.06]
                        hover:text-white
                      "
                    >
                      <Icon className="text-base text-slate-500 transition-colors duration-300 group-hover:text-violet-300" />

                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 flex items-center gap-2 text-sm text-slate-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Continuously learning and expanding my stack.
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;