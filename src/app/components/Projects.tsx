import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Github, ExternalLink, Code, Cloud, Brain } from "lucide-react";

const projects = [
  {
    title: "Legal Assistant AI",
    description:
      "An AI-powered legal query system featuring advanced classification models and intelligent recommendation engine to assist with legal research and queries.",
    tech: ["TypeScript", "JavaScript", "Tailwind CSS", "Machine Learning", "AI"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "AI-powered legal query classification",
      "Intelligent recommendation system",
      "Advanced NLP processing",
      "User-friendly interface",
    ],
    github: "https://github.com",
  },
  {
    title: "Static Website by Cloud",
    description:
      "High-performance responsive website deployed on multiple cloud platforms (AWS S3, Azure, GCP) with CDN integration, achieving 40% performance optimization and 99.9% uptime.",
    tech: ["AWS S3", "Azure", "GCP", "CDN", "Performance Optimization"],
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Multi-cloud deployment (AWS, Azure, GCP)",
      "CDN integration for global delivery",
      "40% performance improvement",
      "99.9% uptime guarantee",
    ],
    github: "https://github.com",
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(147, 51, 234) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(147, 51, 234) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative bg-slate-950/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden group-hover:border-purple-500 transition-all duration-300">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <project.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-purple-500 rounded-lg font-semibold text-white hover:bg-purple-500/10 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-lg font-semibold text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all"
          >
            <Code size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
