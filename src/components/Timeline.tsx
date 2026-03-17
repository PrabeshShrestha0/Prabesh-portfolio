import React from "react";
import { motion } from "framer-motion";
import { timeline } from '../data/constants';

const Timeline: React.FC = () => {
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
    hidden: { 
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.3,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="history" className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Career History</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and achievements.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 via-blue-600 to-green-600 opacity-60 hidden md:block" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                className={`relative flex items-center justify-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 sm:gap-8 md:gap-12`}
              >
                {/* Timeline Dot - Perfectly Centered */}
                <motion.div
                  variants={timelineDotVariants}
                  whileHover="hover"
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 z-20 shadow-xl ${
                    item.type === 'work' 
                      ? 'bg-gradient-to-r from-green-400 to-green-600 border-green-300' 
                      : 'bg-gradient-to-r from-blue-400 to-blue-600 border-blue-300'
                  }`}
                  style={{
                    boxShadow: item.type === 'work' 
                      ? '0 0 20px rgba(34, 197, 94, 0.3)' 
                      : '0 0 20px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  {/* Inner pulse effect */}
                  <motion.div
                    className={`absolute inset-1 rounded-full ${
                      item.type === 'work' ? 'bg-green-400' : 'bg-blue-400'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 0.3, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  variants={itemVariants}
                  className={`w-full md:w-5/12 lg:w-5/12 glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-16' : 'md:ml-auto md:mr-16'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: item.type === 'work'
                      ? "0 25px 50px -12px rgba(34, 197, 94, 0.4)"
                      : "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                  }}
                >
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'work' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    <span className={`text-sm font-bold px-3 py-1 rounded-full border ${
                      item.type === 'work' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  
                  <h4 className={`text-base sm:text-lg md:text-xl mb-3 sm:mb-4 font-semibold ${
                    item.type === 'work' ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {item.company}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                    {item.description}
                  </p>

                  {/* Role Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                      item.type === 'work' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.type === 'work' ? '💼 WORK' : '🎓 EDUCATION'}
                    </span>
                  </div>

                  {/* Subtle decoration */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 ${
                    item.type === 'work' ? 'bg-green-400' : 'bg-blue-400'
                  }`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;