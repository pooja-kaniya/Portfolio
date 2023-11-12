// pages/projects.js
import React from 'react';
import Projects from '../components/Projects';
import Header from '../components/Header';
import '../styles/tailwind.css';

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
