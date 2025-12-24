
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer at Tech Corp",
    content: "Shankar demonstrated exceptional problem-solving skills and consistently delivered high-quality code. His ability to learn new technologies quickly made him a valuable team member.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Project Manager at Innovation Labs",
    content: "Working with Shankar was a pleasure. He has strong communication skills and always delivered projects on time with attention to detail.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer at Creative Studio",
    content: "Shankar's technical expertise combined with his design sensibility resulted in user-friendly applications that exceeded our expectations.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "CTO at StartupXYZ",
    content: "As an intern, Shankar showed remarkable growth and quickly became a key contributor to our development team. Highly recommended!",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  content: string;
  rating: number;
  index: number;
}> = ({ name, role, content, rating, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-gray-700/50 transition-all duration-300"
    >
      <StarRating rating={rating} />
      <blockquote className="text-gray-300 text-sm sm:text-base mb-6 italic leading-relaxed">
        "{content}"
      </blockquote>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-white font-semibold text-sm sm:text-base">{name}</p>
        <p className="text-blue-400 text-xs sm:text-sm">{role}</p>
      </div>
    </motion.div>
  );
};

const Feedback = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12 sm:mb-16">
          <p className={styles.SectionSubText}>What people say</p>
          <h2 className={styles.SectionHeadText}>Testimonials</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            I'm grateful for the positive feedback from colleagues and mentors who have worked with me. 
            Their support and guidance have been instrumental in my growth as a software engineer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "feedback");
