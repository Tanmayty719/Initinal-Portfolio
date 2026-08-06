import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mt-6 max-w-3xl mx-auto"
        >
          Professional experience that strengthened my technical and
          problem-solving skills through real-world projects.
        </motion.p>

        <div className="mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-sky-400 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-500 flex items-center justify-center">
                  <FaBriefcase className="text-white text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.role}
                  </h3>

                  <p className="text-sky-400 font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-400 mb-8">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {exp.location}
                </div>

                <div className="flex items-center gap-2">
                  <MdDateRange />
                  {exp.duration}
                </div>
              </div>

              <p className="text-slate-300 leading-8 mb-8">
                {exp.description}
              </p>

              <h4 className="text-lg font-semibold mb-4">
                Responsibilities
              </h4>

              <ul className="space-y-3 mb-8">
                {exp.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-400"
                  >
                    <span className="text-sky-400 mt-1">✔</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 px-4 py-2 rounded-full text-sm border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;