// Projects.jsx
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import guessthemovieImg from '../assets/guessthemovie.png'
import inventryImg from '../assets/inventory.png'
import amanandbullyImg from '../assets/amanandbully.png'
import chatbotImg from '../assets/chatbot.png'
import novemLetter from '../assets/novemLetter.png'

const projectData = [
  {
    id: 1,
    title: 'Novem Letter',
    description: 'Certificate generation system for Novem Controls with individual/bulk creation, fast search, and PDF/ZIP export.',
    technologies: [
      'MERN Stack',
      'Excel Parsing',
      'PDF/ZIP Export',
      'Indexed Search'
    ],
    repoLink: 'https://github.com/avinashh10x/novemLetters',
    image: novemLetter,
  },
  {
    id: 2,
    title: 'Inventory Store Platform',
    description: 'Retail management platform with dashboard, inventory, client product view, and planned invoice + mobile app integration.',
    technologies: [
      'React',
      'Vite',
      'Chakra UI',
      'Appwrite',
      'React ApexCharts',
      'React Router',
      'Google Login'
    ],
    liveLink: 'https://store-red-eight.vercel.app',
    repoLink: 'https://github.com/avinashh10x/inventory_store_management',
    image: inventryImg,
  },
  {
    id: 3,
    title: 'Aman and Bully',
    description: 'A Wix-based website with e-commerce, community features, parallax effects, and subscription system.',
    technologies: [
      'Wix',
      'E-Commerce',
      'Community',
      'Parallax',
      'Email Subscription'
    ],
    liveLink: 'https://www.amanandbully.com/',
    image: amanandbullyImg,
  },
  {
    id: 4,
    title: 'AI ChatBot with Gemini AI',
    description: 'React Native chatbot app with Gemini AI integration, markdown support, and haptic feedback.',
    technologies: [
      'React Native',
      'Gemini AI',
      'Markdown',
      'Haptic Feedback'
    ],
    repoLink: 'https://github.com/avinashh10x/ChatBot_react_native',
    image: chatbotImg,
  },
];


function Projects() {
  return (
    <div className="w-full flex flex-col justify-start items-center text-center bg-gray-900 py-20">
      {/* Title and Subtitle */}
      <div className="px-5 text-center text-white max-w-md">
        <h1 className="text-4xl py-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">
          Featured Projects
        </h1>
        <p className="text-gray-400">
          A collection of my work showcasing skills in both web and mobile app development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl px-5">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-md filter brightness-50 transition-all duration-300 ease-in-out hover:brightness-100"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 text-center mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 my-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-900 text-black px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-900 font-medium hover:underline"
              >
                <WebIcon /> Live Site
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-900 font-medium hover:underline"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


