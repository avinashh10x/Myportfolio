// Projects.jsx
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import guessthemovieImg from '../assets/guessthemovie.png'
import inventryImg from '../assets/inventory.png'
import amanandbullyImg from '../assets/amanandbully.png'
import chatbotImg from '../assets/chatbot.png'

const projectData = [
  {
    id: 1,
    title: 'Inventory Store Management',
    description: 'A warehouse and product management app built using React Vite to track inventory in real-time. Developed for a friend to efficiently manage his store with Google login for secure access.',
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
    id: 2,
    title: 'Aman and Bully',
    description: 'A full-featured website built on Wix for a freelancer, including e-commerce integration, a community section, a parallax landing page, and a subscription feature.',
    technologies: [
      'Wix', 
      'E-Commerce', 
      'Community Building', 
      'Parallax Scrolling', 
      'Email Subscription'
    ],
    liveLink: 'https://www.amanandbully.com/', 
    // repoLink: '#', 
    image: amanandbullyImg, 
  },
  {
    id: 3,
    title: 'Emojify',
    description: 'A fun and engaging guessing game where users see emojis and try to guess the movie name. Built with React Vite, MUI for design, and includes a confetti explosion effect for correct guesses.',
    technologies: [
      'React', 
      'Vite', 
      'MUI', 
      'Confetti Explosion', 
      'React Router'
    ],
    liveLink: 'https://emojify-three.vercel.app/', 
    repoLink: 'https://github.com/avinashh10x/Emojify', 
    image: guessthemovieImg, 
  },
  {
    id: 4,
    title: 'AI ChatBot with Gemini AI',
    description: 'A mobile AI chatbot application built using React Native, integrating Gemini AI model for natural language understanding. Features haptic feedback for user interactions and supports markdown in chat responses.',
    technologies: [
      'React Native', 
      'Gemini AI', 
      'Markdown Display', 
      'Haptic Feedback', 
      'React Native Dotenv'
    ],
    // liveLink: '/', 
    repoLink: 'https://github.com/avinashh10x/ChatBot_react_native', 
    image: chatbotImg,
  },
  // Add more projects here
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


