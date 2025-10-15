import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-neon-blue transition-colors"><Github /></a>
          <a href="#" className="hover:text-neon-blue transition-colors"><Linkedin /></a>
          <a href="#" className="hover:text-neon-blue transition-colors"><Twitter /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} DevOps for Everyone. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built by Dualite Alpha</p>
      </div>
    </footer>
  );
};

export default Footer;
