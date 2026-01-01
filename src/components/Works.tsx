import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

//import { styles } from "../style";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import website from "../assets/Default.jpg";
import github from "../assets/GitHub-2.png";
import type { Project } from "../data/types";

interface ProjectCardProps extends Project {
  index: number;
}

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
      className="w-80 sm:w-96 md:w-[360px] lg:w-[380px] bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
    >
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        className="bg-tertiary p-5 rounded-2xl h-full"
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image || website}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = website;
            }}
          />

          <div className="absolute inset-0 flex justify-end m-3">
            {link && (
              <div
                onClick={() => window.open(link.replace(/"/g, ""), "_blank")}
                className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 justify-center flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px] mb-2 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-300 text-[13px] sm:text-[14px] leading-relaxed mb-4 line-clamp-3 flex-1">
            {description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
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

interface WorksProps {
  projects: Project[];
}

const Works = ({ projects }: WorksProps) => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-black dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Projects
          </h2>
        </motion.div>

        <motion.div
          key={projects.length}
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              {...project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");

