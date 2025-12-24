
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Tilt from 'react-parallax-tilt'

const technologies = [
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Swift", icon: "📱" },
  { name: "SQL", icon: "🗄️" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📁" },
  { name: "MongoDB", icon: "🍃" },
];

const TechCard: React.FC<{ name: string; icon: string; index: number }> = ({ name, icon, index }) => {
  return (
    <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:bg-gray-700/50 transition-all duration-300"
    >
      <div className="text-3xl sm:text-4xl mb-3">{icon}</div>
      <h3 className="text-white text-sm sm:text-base font-semibold">{name}</h3>
    </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12 sm:mb-16">
          <p className={styles.SectionSubText}>What I work with</p>
          <h2 className={styles.SectionHeadText}>Technologies</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            I specialize in modern web development technologies and have experience building 
            scalable applications. My expertise spans both frontend and backend development, 
            with a focus on creating efficient, user-friendly solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
