import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Lifecycle from './components/Lifecycle';
import Tools from './components/Tools';
import CICDDemo from './components/CICDDemo';
import Roadmap from './components/Roadmap';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Lifecycle />
        <Tools />
        <CICDDemo />
        <Roadmap />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
