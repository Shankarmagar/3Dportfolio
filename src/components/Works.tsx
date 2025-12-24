
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Tilt from 'react-parallax-tilt'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "🛒",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["React", "TypeScript", "Firebase", "Material-UI"],
    image: "📋",
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive maps.",
    tags: ["JavaScript", "API", "CSS3", "Chart.js"],
    image: "🌤️",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and 3D elements.",
    tags: ["React", "Framer Motion", "Three.js", "Tailwind CSS"],
    image: "💼",
    link: "#"
  },
  {
    title: "Mobile Fitness App",
    description: "A cross-platform fitness tracking app with workout routines, progress tracking, and social features for motivation.",
    tags: ["React Native", "Redux", "SQLite"],
    image: "💪",
    link: "#"
  },
  {
    title: "AI Chat Bot",
    description: "An intelligent chatbot built with natural language processing capabilities for customer support and user interaction.",
    tags: ["Python", "OpenAI", "FastAPI", "PostgreSQL"],
    image: "🤖",
    link: "#"
  }
];

const ProjectCard: React.FC<{ 
  title: string; 
  description: string; 
  tags: string[]; 
  image: string; 
  link: string; 
  index: number;
}> = ({ title, description, tags, image, link, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 group"
    >
      <div className="p-6 sm:p-8">
        <div className="text-4xl sm:text-5xl mb-4 text-center">{image}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">
          {title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed text-center">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-center">
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            View Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12 sm:mb-16">
          <p className={styles.SectionSubText}>My work</p>
          <h2 className={styles.SectionHeadText}>Projects</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            These projects showcase my skills in full-stack development, 
            from frontend frameworks to backend APIs and database design. 
            Each project demonstrates my ability to create scalable, user-friendly applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
