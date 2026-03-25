import { motion } from "motion/react";
import { Github, Linkedin, Download, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from "@/assets/9dc50282e1b777c0e0a9c2eb4d20d018ca6d90e2.png";
import resumeCV from "@/assets/4ae8499d2b64c1aac5310c8bbe9e57ffb32edd89.png";

const roles = [
  "Aspiring Cloud Engineer",
  "Software Developer",
  "Problem Solver",
  "AI Enthusiast",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timeout = setTimeout(updateText, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeCV;
    link.download = "Anubhab_Sinha_Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Anubhab Sinha
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-16 flex items-center justify-center"
            >
              <span className="text-2xl sm:text-3xl text-purple-400 font-mono">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 bg-purple-400 ml-1"
                />
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Building scalable cloud solutions and AI-powered applications with a
            passion for clean code and innovative problem-solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <button
              onClick={() => handleNavClick("#projects")}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase size={20} />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="group relative px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>

            <button
              onClick={() => handleNavClick("#contact")}
              className="px-8 py-3 border-2 border-gray-600 rounded-lg font-semibold transition-all hover:border-purple-500 hover:scale-105"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-purple-400 hover:border-purple-500 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-purple-400 hover:border-purple-500 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
