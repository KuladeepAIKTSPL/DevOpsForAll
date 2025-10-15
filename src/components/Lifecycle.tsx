import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Code, Box, TestTube2, Rocket, Server, Monitor, Users } from 'lucide-react';

const stages = [
  { icon: Plane, name: 'Plan' },
  { icon: Code, name: 'Code' },
  { icon: Box, name: 'Build' },
  { icon: TestTube2, name: 'Test' },
  { icon: Rocket, name: 'Release' },
  { icon: Server, name: 'Deploy' },
  { icon: Monitor, name: 'Operate' },
  { icon: Users, name: 'Monitor' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Lifecycle: React.FC = () => {
  return (
    <section id="basics" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          The DevOps Lifecycle
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          DevOps is a continuous journey of improvement, automating and integrating the processes between software development and IT teams.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center"
        >
          {stages.map((stage, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center space-y-3">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-dark-bg border-2 border-neon-blue/50">
                <stage.icon className="w-10 h-10 text-neon-blue" />
              </div>
              <p className="font-semibold text-white">{stage.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Lifecycle;
