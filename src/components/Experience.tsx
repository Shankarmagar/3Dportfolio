import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import type { Experience } from '../data/types';

interface ExperienceProps {
  experiences: Experience[];
}

export const formatDateRange = (startDate: string, endDate: string): string => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const formattedStart = formatDate(startDate);
  
  if (endDate.toLowerCase() === 'present' || !endDate) {
    return `${formattedStart} - Present`;
  }
  
  const formattedEnd = formatDate(endDate);
  return `${formattedStart} - ${formattedEnd}`;
};

const Experience = ({ experiences }: ExperienceProps) => {
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

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{background: '#0c131f', color: '#321c44ff'}}
                date={experience.period}
                dateClassName="text-gray-600 dark:text-gray-300"
                iconStyle={{ background: '#3d37e680', color: '#3e36404d' }}
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
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
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

export default SectionWrapper(Experience, "experience");
