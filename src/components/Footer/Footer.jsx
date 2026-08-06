import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl font-bold">
            Tanmay Kamtekar
          </h2>

          <p className="text-sky-400 mt-3 text-lg">
            Full Stack WEB Developer
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-8">
            Passionate about building modern,
            scalable and user-focused web applications
            with clean design and efficient code.
          </p>

          {/* Social */}

          <div className="flex justify-center gap-6 mt-10">

            <a
              href="https://github.com/Tanmayty719"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-sky-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tanmay-kamtekar-644996371/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-sky-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-sky-500 transition"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Bottom */}

          <div className="border-t border-slate-800 mt-14 pt-10">

            <p className="text-slate-500">
              © {new Date().getFullYear()} Tanmay Kamtekar.
              All Rights Reserved.
            </p>

            <p className="mt-3 text-slate-500 flex justify-center items-center gap-2">
              Built with React, Tailwind CSS & Framer Motion

              <FaHeart className="text-red-500" />
            </p>

          </div>

        </motion.div>

      </div>

      {/* Scroll Top */}

      <button
        onClick={scrollTop}
        className="fixed bottom-8 right-8 bg-sky-500 hover:bg-sky-600 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-xl transition z-50"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;