import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitCommit,
  DownloadCloud,
  Container,
  TestTube2,
  FileText,
  Terminal,
  Cloud,
  Server,
  PlayCircle,
  Code2,
  Eye,
  ChevronRight,
} from 'lucide-react';

const projectsData = [
  {
    id: 'ci-pipeline',
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
    demoSteps: [
      { icon: GitCommit, title: 'Push to Main' },
      { icon: DownloadCloud, title: 'Checkout Code' },
      { icon: Container, title: 'Build Image' },
      { icon: TestTube2, title: 'Run Tests' },
    ],
  },
  {
    id: 'terraform-iac',
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
    demoSteps: [
      { icon: FileText, title: 'Terraform Plan' },
      { icon: Terminal, title: 'Terraform Apply' },
      { icon: Cloud, title: 'Provisioning' },
      { icon: Server, title: 'Instance Created' },
    ],
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
  const [activeTabs, setActiveTabs] = useState({
    'ci-pipeline': 'demo',
    'terraform-iac': 'demo',
  });

  const [animations, setAnimations] = useState({
    'ci-pipeline': { isAnimating: false, activeStep: -1 },
    'terraform-iac': { isAnimating: false, activeStep: -1 },
  });

  const startAnimation = (projectId: string, totalSteps: number) => {
    if (animations[projectId].isAnimating) return;

    setAnimations(prev => ({
      ...prev,
      [projectId]: { isAnimating: true, activeStep: 0 },
    }));

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < totalSteps) {
        setAnimations(prev => ({
          ...prev,
          [projectId]: { ...prev[projectId], activeStep: currentStep },
        }));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setAnimations(prev => ({
            ...prev,
            [projectId]: { isAnimating: false, activeStep: -1 },
          }));
        }, 3000);
      }
    }, 1500);
  };

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
          See DevOps concepts in action. Use the tabs in each card to switch between an interactive demo and the underlying code.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-dark-card border border-gray-800 rounded-lg flex flex-col"
            >
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map(tool => (
                    <span key={tool} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.id === 'ci-pipeline' ? 'bg-neon-blue/10 text-neon-blue' : 'bg-neon-orange/10 text-neon-orange'}`}>{tool}</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="mb-4 flex border-b border-gray-700">
                  <button
                    onClick={() => setActiveTabs(prev => ({ ...prev, [project.id]: 'demo' }))}
                    className={`flex items-center gap-2 py-2 px-4 text-sm font-medium transition-colors ${activeTabs[project.id] === 'demo' ? 'border-b-2 border-neon-blue text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Eye size={16} /> Live Demo
                  </button>
                  <button
                    onClick={() => setActiveTabs(prev => ({ ...prev, [project.id]: 'code' }))}
                    className={`flex items-center gap-2 py-2 px-4 text-sm font-medium transition-colors ${activeTabs[project.id] === 'code' ? 'border-b-2 border-neon-orange text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Code2 size={16} /> Code
                  </button>
                </div>

                {activeTabs[project.id] === 'demo' ? (
                  <div className="bg-dark-bg p-6 rounded-b-lg">
                    <div className="flex justify-end mb-4">
                      <button
                        onClick={() => startAnimation(project.id, project.demoSteps.length)}
                        disabled={animations[project.id].isAnimating}
                        className="flex items-center gap-2 text-sm bg-gray-700/50 hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <PlayCircle size={16} /> {animations[project.id].isAnimating ? 'Running...' : 'Run Demo'}
                      </button>
                    </div>
                    <div className="flex items-center justify-around">
                      {project.demoSteps.map((step, stepIndex) => (
                        <React.Fragment key={stepIndex}>
                          <motion.div
                            className="flex flex-col items-center text-center w-24"
                            animate={{
                              opacity: animations[project.id].activeStep >= stepIndex ? 1 : 0.3,
                              scale: animations[project.id].activeStep === stepIndex ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            <motion.div
                              className="w-16 h-16 rounded-full border-2 flex items-center justify-center transition-colors"
                              animate={{ borderColor: animations[project.id].activeStep >= stepIndex ? (project.id === 'ci-pipeline' ? '#00BFFF' : '#FFA500') : '#4b5563' }}
                            >
                              <step.icon size={32} className="transition-colors" style={{ color: animations[project.id].activeStep >= stepIndex ? (project.id === 'ci-pipeline' ? '#00BFFF' : '#FFA500') : '#9ca3af' }} />
                            </motion.div>
                            <p className="text-xs mt-2 font-medium">{step.title}</p>
                          </motion.div>
                          {stepIndex < project.demoSteps.length - 1 && (
                            <motion.div
                              animate={{ color: animations[project.id].activeStep > stepIndex ? (project.id === 'ci-pipeline' ? '#00BFFF' : '#FFA500') : '#4b5563' }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                              className="hidden sm:block"
                            >
                              <ChevronRight size={28} />
                            </motion.div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-dark-bg rounded-b-lg font-mono text-sm text-gray-300 relative">
                    <pre className="p-4 overflow-x-auto"><code>{project.codeSnippet}</code></pre>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
