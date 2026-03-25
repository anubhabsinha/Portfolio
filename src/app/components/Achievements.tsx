import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Trophy, Award, Star, Target, Code, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "115+ LeetCode Problems",
    description: "Solved diverse algorithmic challenges across multiple difficulty levels",
    stat: "115+",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Star,
    title: "3-Star HackerRank",
    description: "Achieved 3-star rating in C++ programming challenges",
    stat: "3★",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "A Grade Summer Training",
    description: "Received top grade in intensive summer training program",
    stat: "A",
    color: "from-blue-500 to-cyan-500",
  },
];

const certifications = [
  {
    icon: Brain,
    title: "Generative AI",
    issuer: "Infosys Springboard",
    date: "2024",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Finite Automata Theory",
    issuer: "Academic Excellence",
    date: "2024",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Target,
    title: "No-code AI Applications",
    issuer: "Professional Development",
    date: "2024",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code,
    title: "Data Structures & Algorithms",
    issuer: "Certification Program",
    date: "2023",
    gradient: "from-green-500 to-teal-500",
  },
];

function Brain({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

export function Achievements() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="achievements" ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
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
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 group-hover:border-purple-500 transition-all">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                  <achievement.icon className="text-white" size={32} />
                </div>

                <div className={`text-4xl font-bold mb-4 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent text-center`}>
                  {achievement.stat}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {achievement.title}
                </h3>

                <p className="text-gray-400 text-center text-sm">
                  {achievement.description}
                </p>

                {/* Animated Border */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-sm transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity`} />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 h-full group-hover:border-purple-500 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <cert.icon className="text-white" size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-purple-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>

                {/* Badge Corner */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trophy className="text-yellow-500" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
