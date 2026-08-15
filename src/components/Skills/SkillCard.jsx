import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const SkillCard = ({ skill, index = 0 }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-violet-400/30
        hover:bg-white/[0.04]
        hover:shadow-[0_18px_50px_rgba(0,0,0,0.2)]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-violet-500/[0.08]
          blur-[55px]
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.04]
              text-violet-300
              transition-all
              duration-300
              group-hover:border-violet-400/30
              group-hover:bg-violet-500/10
            "
          >
            <Icon className="text-xl" />
          </div>

          <HiArrowUpRight
            className="
              text-lg
              text-slate-600
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-violet-300
            "
          />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {skill.description}
        </p>

        {/* Tags */}
        {skill.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-md
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-2.5
                  py-1.5
                  text-xs
                  font-medium
                  text-slate-400
                  transition
                  duration-300
                  group-hover:border-white/[0.1]
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard;