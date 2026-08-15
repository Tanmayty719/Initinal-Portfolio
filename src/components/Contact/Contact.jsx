import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { contactInfo } from "../../data/contact";

const icons = {
  Email: FaEnvelope,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Location: FaMapMarkerAlt,
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#08090d] py-24 sm:py-28"
    >
      {/* Background accents */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/[0.06] via-cyan-400/[0.04] to-violet-500/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet-500/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* Main CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="border-y border-white/[0.07] py-16 sm:py-20"
        >
          {/* Label */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-violet-400 to-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Contact
            </span>
          </div>

          {/* Heading */}

          <h2 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Let&apos;s build something
            <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              worth shipping.
            </span>
          </h2>

          {/* Description */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m open to Full Stack, React, and Web Development
            opportunities. Whether it&apos;s an internship, collaboration, or a
            project idea, I&apos;d be happy to connect.
          </p>

          {/* CTA buttons */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:tkworkspace12@gmail.com"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                px-6
                py-3.5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_35px_rgba(139,92,246,0.25)]
                active:scale-95
                sm:w-auto
              "
            >
              <FaEnvelope />
              Email Me
            </a>

            <a
              href="/TanmayKamtekarresume.pdf"
              download="Tanmay_Kamtekar_Resume.pdf"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.1]
                bg-white/[0.025]
                px-6
                py-3.5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-400/30
                hover:bg-white/[0.05]
                active:scale-95
                sm:w-auto
              "
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Contact links */}

        <div className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = icons[item.title];

            if (!Icon) {
              return null;
            }

            const content = (
              <>
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    text-slate-400
                    transition
                    duration-300
                    group-hover:border-violet-400/30
                    group-hover:bg-violet-500/[0.08]
                    group-hover:text-violet-300
                  "
                >
                  <Icon className="text-sm" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                    {item.title}
                  </p>

                  <p className="mt-2 break-words text-sm font-medium text-slate-300 transition group-hover:text-white">
                    {item.value}
                  </p>
                </div>

                {item.link && item.title !== "Email" && (
                  <FaArrowUpRightFromSquare className="ml-auto shrink-0 text-xs text-slate-600 transition group-hover:text-slate-300" />
                )}
              </>
            );

            if (!item.link) {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    p-4
                  "
                >
                  {content}
                </motion.div>
              );
            }

            return (
              <motion.a
                key={item.title}
                href={item.link}
                target={
                  item.link.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -3 }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  p-4
                  transition-all
                  duration-300
                  hover:border-violet-400/20
                  hover:bg-white/[0.035]
                "
              >
                {content}
              </motion.a>
            );
          })}
        </div>

        {/* Availability */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 border-t border-white/[0.07] pt-8"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          <p className="text-sm text-slate-500">
            Currently open to internship and entry-level opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;