import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/5 via-transparent to-cyan-500/5"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-sky-500 transition">
            <Icon className="text-3xl text-sky-400 group-hover:text-white transition" />
          </div>

          <HiArrowUpRight className="text-xl text-slate-500 group-hover:text-sky-400 transition" />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          {skill.name}
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          {skill.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;