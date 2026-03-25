import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "2021 - 2025",
    cgpa: "6.01 CGPA",
    description: "Specializing in Cloud Computing, Software Development, and AI-based solutions",
    highlights: [
      "Cloud Computing & DevOps",
      "Data Structures & Algorithms",
      "Machine Learning & AI",
      "Software Engineering",
    ],
  },
  {
    degree: "Intermediate (12th)",
    institution: "Academic Institution",
    location: "India",
    period: "2019 - 2021",
    cgpa: "Completed",
    description: "Completed higher secondary education with focus on Science and Mathematics",
    highlights: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
    ],
  },
  {
    degree: "Matriculation (10th)",
    institution: "Academic Institution",
    location: "India",
    period: "2018 - 2019",
    cgpa: "Completed",
    description: "Completed secondary education with strong foundation in core subjects",
    highlights: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies",
    ],
  },
];

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147, 51, 234) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-950"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 group-hover:border-purple-500 transition-all">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <GraduationCap className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-purple-400 font-semibold mb-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={16} className="text-purple-400" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin size={16} className="text-purple-400" />
                        {edu.location}
                      </div>
                      <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300 font-semibold">
                        {edu.cgpa}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{edu.description}</p>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
                        Key Subjects
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {edu.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
