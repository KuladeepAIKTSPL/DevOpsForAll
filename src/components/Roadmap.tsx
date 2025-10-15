import React from 'react';
import { motion } from 'framer-motion';

const roadmapSteps = [
  { title: 'Version Control with Git', description: 'Learn the fundamentals of Git and GitHub for collaborative coding.' },
  { title: 'CI/CD with Jenkins', description: 'Automate your build, test, and deployment pipelines.' },
  { title: 'Containerization with Docker', description: 'Package applications into portable containers.' },
  { title: 'Orchestration with Kubernetes', description: 'Manage and scale containerized applications effectively.' },
  { title: 'Infrastructure as Code (IaC)', description: 'Provision and manage infrastructure using code with Terraform.' },
  { title: 'Monitoring & Logging', description: 'Gain insights into your applications with Prometheus and Grafana.' },
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Your Learning Roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          Follow this structured path to build a strong foundation in DevOps, from the basics to advanced concepts.
        </motion.p>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700" aria-hidden="true"></div>
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-dark-bg p-6 rounded-lg border border-gray-800 shadow-lg">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 bg-dark-card border-2 border-neon-blue rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
