import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center mt-6 max-w-3xl mx-auto leading-8 text-lg"
        >
          I enjoy building modern, scalable and user-focused web applications
          using industry-standard technologies across the full development stack.
        </motion.p>

        <div className="space-y-20 mt-20">

          {skillCategories.map((category) => (

            <div key={category.title}>

              <h3 className="text-3xl font-bold mb-8 text-sky-400">
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;