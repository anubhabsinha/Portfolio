import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code2, Cloud, Brain, Target } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Expertise in AWS, GCP, and Azure with focus on scalable architectures",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Proficient in C++, Python, Java, and modern web technologies",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Building intelligent systems with machine learning and AI",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "115+ LeetCode problems solved with systematic approach",
  },
];

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Computer Science student at Lovely Professional University,
                  specializing in <span className="text-purple-400 font-semibold">cloud computing</span> and{" "}
                  <span className="text-purple-400 font-semibold">software development</span>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My expertise spans across building scalable cloud solutions on AWS, GCP, and Azure,
                  developing AI-powered applications, and solving complex algorithmic challenges.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm driven by a problem-solving mindset and a commitment to creating efficient,
                  scalable solutions that make a real-world impact. Whether it's optimizing
                  infrastructure or building intelligent systems, I focus on delivering excellence.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
