import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import website from "../assets/Default.jpg";
import github from "../assets/GitHub-2.png";


interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface ProjectCardProps extends Project {
  index: number;
}


const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: website,
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management app with real-time updates and drag-and-drop.",
    tags: ["React", "TypeScript", "Firebase", "Material-UI"],
    image: website,
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with forecasts and interactive maps.",
    tags: ["JavaScript", "API", "CSS3", "Chart.js"],
    image: website,
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations and 3D elements.",
    tags: ["React", "Framer Motion", "Three.js", "Tailwind CSS"],
    image: website,
    link: "#",
  },
  {
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness tracking app with progress tracking.",
    tags: ["React Native", "Redux", "SQLite"],
    image: website,
    link: "#",
  },
  {
    title: "AI Chat Bot",
    description:
      "An intelligent chatbot built with NLP for customer interaction.",
    tags: ["Python", "OpenAI", "FastAPI", "PostgreSQL"],
    image: website,
    link: "#",
  },
];


const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
    >
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-[90%] h-[90%] object-contain"
              />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px]">{title}</h3>

          <p className="mt-2 text-gray-300 text-[14px] leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full">
      <motion.div
        variants={textVariant()}
        className="text-center mb-12 sm:mb-16"
      >
        <p className={styles.SectionSubText}>My Work</p>
        <h2 className={styles.SectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center"
        >
          These projects highlight my experience across analytics, full-stack
          development, and data-driven problem solving.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-12 flex flex-wrap justify-center gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
