import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#08090d]">
      {/* Subtle background accents */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-violet-500/[0.025] blur-[110px]" />

      <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-cyan-400/[0.02] blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top row */}

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Brand */}

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollTop}
                aria-label="Back to top"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-violet-500
                  to-cyan-400
                  text-xs
                  font-black
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]
                "
              >
                TK
              </button>

              <div>
                <p className="text-sm font-semibold text-white">
                  Tanmay Kamtekar
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-600">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Social links */}

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Tanmayty719"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-500
                  transition-all
                  duration-300
                  hover:border-violet-400/30
                  hover:bg-violet-500/[0.08]
                  hover:text-white
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/tanmay-kamtekar-644996371/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-500
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.08]
                  hover:text-white
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:tkworkspace12@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-500
                  transition-all
                  duration-300
                  hover:border-violet-400/30
                  hover:bg-violet-500/[0.08]
                  hover:text-white
                "
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Bottom row */}

          <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Tanmay Kamtekar. All rights
              reserved.
            </p>

            <p className="text-xs text-slate-700">
              Built with React · Tailwind CSS · Framer Motion
            </p>
          </div>
        </motion.div>
      </div>

      {/* Back to top */}

      <button
        onClick={scrollTop}
        aria-label="Back to top"
        className="
          fixed
          bottom-6
          right-6
          z-40
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.08]
          bg-[#11141b]/90
          text-slate-400
          shadow-xl
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-violet-400/30
          hover:bg-violet-500/10
          hover:text-white
        "
      >
        <FaArrowUp className="text-sm" />
      </button>
    </footer>
  );
};

export default Footer;