import { motion } from "framer-motion";
import Button from "../common/Button";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

import { contactInfo } from "../../data/contact";

const icons = {
  Email: <FaEnvelope />,
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Location: <FaMapMarkerAlt />,
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[180px] rounded-full"></div>

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
            Contact
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Let's Connect
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg leading-8">
            I'm currently looking for Full Stack / MERN Developer Internship
            opportunities. If you'd like to collaborate or discuss an
            opportunity, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link || "#"}
              target={item.link?.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-sky-400 transition duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-500 flex items-center justify-center text-2xl">
                {icons[item.title]}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-3 break-all">
                {item.value}
              </p>
            </motion.a>
          ))}

        </div>

        {/* Resume Button */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-3 bg-sky-500 hover:bg-sky-600 transition px-8 py-4 rounded-xl font-semibold text-lg"
          >
            <FaDownload />

            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;