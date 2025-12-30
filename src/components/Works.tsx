import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";

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

interface ApiProject {
  id: number;
  name: string;
  details: string;
  image_url: string;
  skills: string[];
  demo_link: string;
  github_link: string;
  created_at: string;
  updated_at: string;
  has_image: boolean;
}

interface ApiResponse {
  statusCode: number;
  json: {
    success: boolean;
    message: string;
    timestamp: string;
    data: ApiProject[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
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
      className="flex-shrink-0 w-80 sm:w-96 md:w-[360px] lg:w-[380px] bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
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
              const target = e.target as HTMLImageElement;
              target.src = website;
            }}
          />

          <div className="absolute inset-0 flex justify-end m-3">
  {link && (
    <div
      onClick={() => {
        const cleanLink = link.replace(/"/g, "");
        window.open(cleanLink, "_blank");
      }}
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
          <h3 className="text-white font-bold text-[20px] sm:text-[22px] mb-2 line-clamp-2">{title}</h3>

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

const Works = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
                                  import.meta.env.VITE_RENDER_API +'/api/projects/'
                                );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        if (data.json.success && data.json.data) {
          // Transform API data to match Project interface
          const transformedProjects: Project[] = data.json.data.map((apiProject: ApiProject) => ({
            title: apiProject.name,
            description: apiProject.details,
            tags: apiProject.skills,
            image: apiProject.image_url || website,
            link: apiProject.github_link || apiProject.demo_link || '#'
          }));
          
          setProjects(transformedProjects);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <motion.div
          variants={textVariant()}
          className="text-center mb-12 sm:mb-16"
        >
          <p className={styles.SectionSubText}>My Work</p>
          <h2 className={styles.SectionHeadText}>Projects</h2>
        </motion.div>
        <div className="w-full flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <motion.div
          variants={textVariant()}
          className="text-center mb-12 sm:mb-16"
        >
          <p className={styles.SectionSubText}>My Work</p>
          <h2 className={styles.SectionHeadText}>Projects</h2>
        </motion.div>
        <div className="w-full flex justify-center items-center py-20">
          <div className="text-red-400 text-center">
            <p className="text-lg mb-2">Error loading projects</p>
            <p className="text-sm text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

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
          <ProjectCard key={`${project.title}-${index}`} {...project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
