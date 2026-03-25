import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code2, Database, Cloud, Users, Lightbulb, Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "C", level: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: Database,
    skills: [
      { name: "SQL", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 90 },
    ],
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Google Cloud", level: 80 },
      { name: "Azure", level: 75 },
    ],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem-solving", level: 95 },
      { name: "Teamwork", level: 90 },
      { name: "Adaptability", level: 88 },
    ],
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                        >
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lightbulb className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">115+</div>
                <div className="text-sm text-gray-400">LeetCode Problems</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">3 Star</div>
                <div className="text-sm text-gray-400">HackerRank C++</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">A Grade</div>
                <div className="text-sm text-gray-400">Summer Training</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
