import React from 'react';
import { motion } from 'framer-motion';
import { GitMerge, Container, ShipWheel, Layers, ServerCog, Anchor, BarChart } from 'lucide-react';

const tools = [
  { name: 'Git', desc: 'Version Control', icon: GitMerge },
  { name: 'Jenkins', desc: 'CI/CD Automation', icon: ServerCog },
  { name: 'Docker', desc: 'Containerization', icon: Container },
  { name: 'Kubernetes', desc: 'Orchestration', icon: ShipWheel },
  { name: 'Ansible', desc: 'Config Management', icon: Anchor },
  { name: 'Terraform', desc: 'Infrastructure as Code', icon: Layers },
  { name: 'Prometheus', desc: 'Monitoring', icon: BarChart },
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

const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Essential DevOps Tools
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          Explore the most popular tools that form the backbone of modern DevOps practices, from version control to monitoring.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-dark-card border border-gray-800 rounded-lg p-6 text-center cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-neon-orange/20"
            >
              <tool.icon className="w-12 h-12 text-neon-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400">{tool.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
