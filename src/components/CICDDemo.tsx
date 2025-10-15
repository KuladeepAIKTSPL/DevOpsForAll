import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, HardHat, ClipboardCheck, UploadCloud, ChevronsRight, ChevronDown, PlayCircle } from 'lucide-react';

const pipelineStages = [
  {
    icon: Github,
    title: 'Code',
    description: 'Developer pushes new code to a shared repository like GitHub.',
  },
  {
    icon: HardHat,
    title: 'Build',
    description: 'An automated server detects the change, fetches the code, and builds the application.',
  },
  {
    icon: ClipboardCheck,
    title: 'Test',
    description: 'Automated tests run to check for bugs and ensure the application is stable and reliable.',
  },
  {
    icon: UploadCloud,
    title: 'Deploy',
    description: 'If all tests pass, the new version is automatically deployed to production servers for users.',
  },
];

const CICDDemo: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeStage, setActiveStage] = useState(-1);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveStage(0);

    const interval = setInterval(() => {
      setActiveStage((prev) => {
        if (prev >= pipelineStages.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setActiveStage(-1);
            setIsAnimating(false);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <section id="cicd" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Visual CI/CD Pipeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          Watch how code gets from the developer's machine to the user. Click the button below to run an animated demo of a typical CI/CD workflow.
        </motion.p>
        
        <div className="flex flex-col items-center">
          {/* Desktop Pipeline */}
          <div className="hidden md:flex items-center justify-center w-full">
            {pipelineStages.map((stage, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="flex flex-col items-center text-center p-4 w-60 h-60 justify-center rounded-lg border-2"
                  animate={{
                    borderColor: activeStage >= index ? '#00BFFF' : '#374151',
                    boxShadow: activeStage === index 
                      ? ['0 0 15px rgba(0, 191, 255, 0.5)', '0 0 25px rgba(0, 191, 255, 0.8)', '0 0 15px rgba(0, 191, 255, 0.5)'] 
                      : 'none',
                    scale: activeStage === index ? 1.05 : 1
                  }}
                  transition={{
                    duration: 0.5,
                    boxShadow: activeStage === index ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.5 }
                  }}
                >
                  <stage.icon className="w-12 h-12 mb-3 transition-colors duration-500" style={{ color: activeStage >= index ? '#00BFFF' : '#9CA3AF' }} />
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-500" style={{ color: activeStage >= index ? '#FFFFFF' : '#D1D5DB' }}>{stage.title}</h3>
                  <p className="text-sm text-gray-400">{stage.description}</p>
                </motion.div>
                {index < pipelineStages.length - 1 && (
                  <motion.div
                    className="mx-4"
                    animate={{ color: activeStage > index ? '#00BFFF' : '#4B5563' }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <ChevronsRight size={48} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Pipeline */}
          <div className="md:hidden flex flex-col items-center w-full">
            {pipelineStages.map((stage, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="flex flex-col items-center text-center p-6 w-full max-w-sm rounded-lg border-2"
                   animate={{
                    borderColor: activeStage >= index ? '#00BFFF' : '#374151',
                    boxShadow: activeStage === index 
                      ? ['0 0 15px rgba(0, 191, 255, 0.5)', '0 0 25px rgba(0, 191, 255, 0.8)', '0 0 15px rgba(0, 191, 255, 0.5)'] 
                      : 'none',
                    scale: activeStage === index ? 1.05 : 1
                  }}
                  transition={{
                    duration: 0.5,
                    boxShadow: activeStage === index ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.5 }
                  }}
                >
                  <stage.icon className="w-10 h-10 mb-3 transition-colors duration-500" style={{ color: activeStage >= index ? '#00BFFF' : '#9CA3AF' }} />
                  <h3 className="text-lg font-bold mb-2 transition-colors duration-500" style={{ color: activeStage >= index ? '#FFFFFF' : '#D1D5DB' }}>{stage.title}</h3>
                  <p className="text-xs text-gray-400">{stage.description}</p>
                </motion.div>
                {index < pipelineStages.length - 1 && (
                  <motion.div
                    className="my-4"
                    animate={{ color: activeStage > index ? '#00BFFF' : '#4B5563' }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <ChevronDown size={36} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.button
            onClick={startAnimation}
            disabled={isAnimating}
            whileHover={{ scale: isAnimating ? 1 : 1.05 }}
            whileTap={{ scale: isAnimating ? 1 : 0.95 }}
            className="mt-12 flex items-center gap-3 bg-neon-orange text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,165,0,0.5)] hover:shadow-[0_0_25px_rgba(255,165,0,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlayCircle />
            {isAnimating ? 'Pipeline Running...' : 'Run Pipeline Demo'}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CICDDemo;
