import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    location: "Remote",
    description: "Developing scalable web applications using React, Node.js, and cloud technologies. Led the development of a customer management system serving 10,000+ users.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"]
  },
  {
    title: "Software Developer Intern",
    company: "Innovation Labs",
    period: "2022 - 2023",
    location: "San Francisco, CA",
    description: "Contributed to front-end development using React and Redux. Implemented responsive designs and improved application performance by 30%.",
    technologies: ["React", "Redux", "JavaScript", "SCSS", "Git", "Jest"]
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency Pro",
    period: "2021 - 2022",
    location: "New York, NY",
    description: "Built and maintained client websites using modern web technologies. Collaborated with design teams to create pixel-perfect implementations.",
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"]
  }
];

const Experience = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-black dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.period}
                dateClassName="text-gray-600 dark:text-gray-300"
                iconStyle={{ background: '#2563eb', color: '#fff' }}
                icon={
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="w-3 h-3 bg-[#39373b] rounded-full"></div>
                  </div>
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0c131f] dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-white mb-1 sm:mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                    📍 {experience.location}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience
