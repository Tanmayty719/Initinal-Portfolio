import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBriefcase,
  FaDatabase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode className="text-4xl text-sky-400" />,
    value: "12+",
    title: "Technologies",
  },
  {
    icon: <FaCode className="text-4xl text-sky-400" />,
    value: "2",
    title: "Major Projects",
  },
  {
    icon: <FaBriefcase className="text-4xl text-sky-400" />,
    value: "1",
    title: "Internship",
  },
  {
    icon: <FaDatabase className="text-4xl text-sky-400" />,
    value: "MERN",
    title: "Stack",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-slate-400 mt-8 max-w-4xl mx-auto leading-8 text-lg"
        >
          I'm a passionate{" "}
          <span className="text-sky-400 font-semibold">
            Full Stack WEB Developer
          </span>{" "}
          who enjoys building responsive, scalable and user-focused web
          applications.

          <br />
          <br />

          My experience includes developing real-time applications using React, Node.js, Express, MongoDB, JWT Authentication, Socket.IO, and Cloudinary. I am committed to continuous learning and currently expanding my expertise in modern web technologies, scalable application development, and industry best practices.

          <br />
          <br />

          During my internship at{" "}
          <span className="text-white font-medium">
            V-Arts Services Pvt. Ltd.
          </span>
          , I contributed to a live client project using WordPress,
          Elementor and the Fancy Product Designer plugin, gaining
          valuable real-world development experience.
        </motion.p>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-sky-400 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-20"></div>

        {/* Featured Work */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Featured Work
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 hover:border-sky-400 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">🏆</div>

              <h4 className="text-2xl font-bold mb-4">
                Auction Centrall
              </h4>

              <p className="text-slate-400 leading-7">
                My flagship MERN Stack project featuring JWT
                Authentication, Socket.IO real-time bidding,
                Cloudinary image uploads, Admin Dashboard and
                responsive UI.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 hover:border-sky-400 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">💼</div>

              <h4 className="text-2xl font-bold mb-4">
                Printed Sports Balls
              </h4>

              <p className="text-slate-400 leading-7">
                Client project completed during my internship at
                <span className="text-white">
                  {" "}V-Arts Services Pvt. Ltd.
                </span>.
                Worked on WordPress customization,
                Elementor layouts, Fancy Product Designer,
                custom CSS and responsive UI improvements.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 hover:border-sky-400 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">🎨</div>

              <h4 className="text-2xl font-bold mb-4">
                Personal Portfolio
              </h4>

              <p className="text-slate-400 leading-7">
                A modern portfolio built using React,
                Tailwind CSS and Framer Motion to
                showcase my technical skills,
                experience and projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;