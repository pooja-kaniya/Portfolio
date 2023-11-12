
import Image from "next/image";
import React, { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('skills');

  const renderSkills = () => (
    <div>
      <h3 className="text-xl font-bold mb-2"></h3>
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    </div>
  );

  const renderEducation = () => (
    <div>
      <h3 className="text-xl font-bold mb-2"></h3>
      <p>Bachelor's in Computer Science, SUKKUR IBA  University</p>
    </div>
  );

  const renderWorkExperience = () => (
    <div>
      <h3 className="text-xl font-bold mb-2"></h3>
      <ul className="list-disc pl-2">
        <li>Web Developer at Srip@Spark Foundation Company</li>
        <li>Backend Developer at AIM TECHNOLOGIES under PSEB</li>
      </ul>
     
    </div>
  );

  return (
  
    <div className="container mx-auto p-4 flex items-center">
      
      <div className="lg:w-1/2  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mr-12">
        <Image
          src="/images/about-image.png"
          alt="hero image"
          className=" rounded absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/3"
          width={500}
          height={300}
        />
      </div>


      <div className="w-2/3">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications.
        </p>

        <div className="flex space-x-4 mt-4">
          <button
            className={`text-lg font-bold focus:outline-none ${
              activeSection === 'skills' ? 'text-purple-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button
            className={`text-lg font-bold focus:outline-none ${
              activeSection === 'education' ? 'text-purple-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button
            className={`text-lg font-bold focus:outline-none ${
              activeSection === 'experience'
                ? 'text-purple-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveSection('experience')}
          >
            Work Experience
          </button>
        </div>

        <div className="mt-4">
          {activeSection === 'skills' && renderSkills()}
          {activeSection === 'education' && renderEducation()}
          {activeSection === 'experience' && renderWorkExperience()}
        </div>
      </div>
    </div>
   
  );
};

export default About;
