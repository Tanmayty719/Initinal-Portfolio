import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { education } from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sky-400 uppercase tracking-[0.3em] text-sm">
            Academic Journey
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Education
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            My academic background has provided a strong foundation in
            computer science, software development and problem solving.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-sky-500 flex items-center justify-center mb-6">
                <FaGraduationCap className="text-3xl text-white" />
              </div>

              {/* Degree */}
              <h3 className="text-2xl font-bold">
                {item.degree}
              </h3>

              <p className="text-sky-400 text-lg mt-2">
                {item.specialization}
              </p>

              <p className="text-slate-400 mt-3">
                {item.institute}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-2 mt-6 text-slate-300">
                <FaCalendarAlt className="text-sky-400" />
                <span>{item.duration}</span>
              </div>

              {/* Status */}
              <div className="mt-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    item.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-sky-500/20 text-sky-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* CGPA */}
              {item.cgpa !== "-" && (
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">
                    CGPA
                  </h4>

                  <p className="text-slate-300">
                    {item.cgpa}
                  </p>
                </div>
              )}

              {/* Subjects */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">
                  Relevant Coursework
                </h4>

                <div className="flex flex-wrap gap-3">
                  {item.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm hover:border-sky-400 transition"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;