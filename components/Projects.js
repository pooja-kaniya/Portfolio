
import React, { useState } from 'react';

const Projects = () => {
  const initialProjects = [
    { title: 'Food Ordering Application', description: 'Project 1 description', image: '/images/project1.jpg' },
    { title: 'E-commerce Application', description: 'Project 2 description', image: '/images/project2.jpg' },
    { title: 'Full-stack Roadmap', description: 'Project 3 description', image: '/images/project3.png' },
    // Add more projects
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.title === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Projects</h2>

      {/* Filter buttons */}
      <div className="flex space-x-4 mb-4">
        <button onClick={() => handleFilter('All')} className="bg-purple-500 text-black  px-4 py-2 rounded-md">All</button>
        <button onClick={() => handleFilter('Food Ordering Application')} className="bg-purple-500 text-black px-4 py-2 rounded-md">Project 1</button>
        <button onClick={() => handleFilter('E-commerce Application')} className="bg-purple-500 text-black px-4 py-2 rounded-md">Project 2</button>
        <button onClick={() => handleFilter('Full-stack Roadmap')} className="bg-purple-500 text-black px-4 py-2 rounded-md">Project 3</button>
        {/* Add more filter buttons based on your projects */}
      </div>

      {/* Project list with title, description, and image */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden bg-white rounded-xl shadow-xl transition-transform transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-2" />
            <div className="p-4">
              <h3 className="text-xl text-black font-bold mb-2">{project.title}</h3>
              <p className="text-xl text-black  mb-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
