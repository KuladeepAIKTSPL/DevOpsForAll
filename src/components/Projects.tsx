import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Automated CI Pipeline',
    description: 'A simple CI pipeline using GitHub Actions that builds and tests a Docker image on every push to the main branch.',
    tools: ['GitHub Actions', 'Docker'],
    codeSnippet: `name: CI Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build Docker image
        run: docker build . -t my-app:latest

      - name: Run basic tests
        run: echo "Running automated tests..."`,
    link: '#',
  },
  {
    title: 'Infrastructure with Terraform',
    description: 'Define and provision a basic cloud infrastructure (like a VPC and a server instance) using Terraform HCL.',
    tools: ['Terraform', 'AWS'],
    codeSnippet: `provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}`,
    link: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Projects & Demos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          See DevOps concepts in action with these real-world examples. Each demo includes a code snippet to illustrate the process.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-card border border-gray-800 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map(tool => (
                    <span key={tool} className="bg-neon-blue/10 text-neon-blue text-xs font-semibold px-2.5 py-1 rounded-full">{tool}</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="bg-dark-bg rounded-md p-4 font-mono text-sm text-gray-300 relative">
                  <div className="absolute top-2 right-2 text-gray-500 text-xs select-none">YAML</div>
                  <pre><code>{project.codeSnippet}</code></pre>
                </div>
              </div>
              <div className="bg-dark-bg/50 p-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-neon-orange hover:text-white transition-colors duration-300 font-semibold"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
