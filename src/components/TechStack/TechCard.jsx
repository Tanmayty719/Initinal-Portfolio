import { motion } from "framer-motion";

const TechCard = ({ tech }) => {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        h-full
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-md
        p-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        cursor-pointer
        transition-all
        duration-300
        hover:border-sky-400
        hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]
      "
    >
      <Icon className="text-5xl text-sky-400 transition duration-300 group-hover:rotate-12 group-hover:scale-110" />

      <h3 className="mt-5 font-semibold text-lg">
        {tech.name}
      </h3>
    </motion.div>
  );
};

export default TechCard;