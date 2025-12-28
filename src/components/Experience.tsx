import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';


interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

interface ApiExperience {
  id: number;
  title: string;
  company_name: string;
  start_date: string;
  end_date: string;
  details: string;
  location: string;
  skills: string[];
}

const fetchExperienceData = async (): Promise<Experience[]> => {
const response = await fetch(
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID + '/api/journey'
);
  const result = await response.json();
  
  if (!result.json.success) {
    throw new Error('Failed to fetch experience data');
  }

  return result.json.data.map((item: ApiExperience) => ({
    title: item.title,
    company: item.company_name,
    period: formatDateRange(item.start_date, item.end_date),
    location: item.location,
    description: item.details,
    technologies: item.skills || []
  }));
};

const formatDateRange = (startDate: string, endDate: string): string => {
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

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchExperienceData();
        setExperiences(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load experiences');
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  if (loading) {
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
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
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
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-red-400 text-center">
              <p className="text-lg mb-2">Error loading experiences</p>
              <p className="text-sm text-gray-400">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

export default SectionWrapper(Experience, "experience")
