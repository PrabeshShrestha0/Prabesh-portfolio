import React from "react";
import { motion } from "framer-motion";
import { skills } from '../data/constants';

const Expertise: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skillCardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="expertise" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Specialized in business development with a focus on creating scalable and efficient solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={skillCardVariants}
              whileHover="hover"
              className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 cursor-pointer group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl" />
              
              {/* Icon */}
              <motion.div 
                className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 relative z-10"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white relative z-10">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed relative z-10 text-sm sm:text-base">
                {skill.description}
              </p>
              
              {/* Category Badge */}
              <div className="inline-block mb-4">
                <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm font-medium border border-purple-500/30">
                  {skill.category}
                </span>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                {skill.technologies.slice(0, 3).map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + techIndex * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 text-purple-400 rounded-lg text-xs font-medium border border-white/20 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
                {skill.technologies.length > 3 && (
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-500/20 text-gray-400 rounded-lg text-xs font-medium border border-gray-500/30">
                    +{skill.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;