
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Bin Li",
    role: "Data and Business Intelligence at Linkedin Corp",
    content: "Shankar joined my team as a Year-Up Intern and quickly made a strong impact. He developed key skills in SQL, Tableau, GitHub, and SFDC, and contributed to analytics projects that supported data foundations, dashboards, and revenue insights. Proactive and research-driven, Shankar consistently embraced new challenges and added value during his time at LinkedIn.",
    rating: 5
  },
  {
    name: "Elaine King",
    role: "Senior Analytics Associates at Linkedin",
    content: "Shankar is a skilled, detail-oriented analyst I worked with at LinkedIn. He took initiative on a complex cross-functional data problem, delivered valuable product insights, and communicated clearly to ensure data accuracy. He was a pleasure to work with, and I’m excited to see what he does next.",
    rating: 5
  },
  {
    name: "Greg Elliot",
    role: "Analytics at Linkedin",
    content: "Shankar has been a strong addition to our analytics team, consistently demonstrating a great work ethic and proactive mindset. He delivered high-impact analytics projects that added real business value, and I’m confident he’ll continue to excel in future roles.",
    rating: 5
  },
  {
    name: "Brian Lee",
    role: "Strategy and Operations at Linkedin",
    content: "I worked closely with Shankar during his internship at LinkedIn and was impressed by his strong work ethic, proactive attitude, and technical skills. He demonstrated advanced SQL expertise by independently solving a complex Salesforce data hierarchy problem. I highly recommend Shankar as a capable, driven professional who would be a valuable asset to any team.",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  content: string;
  rating: number;
}> = ({ name, role, content, rating }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, type: "spring", damping: 20 }}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
        }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <StarRating rating={rating} />
          
          <motion.blockquote 
            className="text-gray-300 text-base mb-8 italic leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            "{content}"
          </motion.blockquote>
          
          <motion.div 
            className="border-t border-gray-600/50 pt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-white font-semibold text-lg mb-1">{name}</p>
            <p className="text-blue-400 text-sm font-medium">{role}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Carousel variants for smooth animations
const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 45 : -45,
  }),
};

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={textVariant()} 
          className="text-center mb-16"
        >
          <p className={styles.SectionSubText}>What people say</p>
          <h2 className={styles.SectionHeadText}>Testimonials</h2>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 }
                }}
                className="flex justify-center"
              >
                <TestimonialCard {...testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 hover:bg-gray-700/80 backdrop-blur-sm rounded-full p-3 text-white shadow-lg border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 group"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full p-3 text-white shadow-lg border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 group"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => slideTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Summary Text */}
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm grateful for the positive feedback from colleagues and mentors who have worked with me. 
            Their support and guidance have been instrumental in my growth as a software engineer.
          </p>
        </motion.div>

        {/* Auto-play indicator */}
        {/* <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            }`}
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'}
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "feedback");
