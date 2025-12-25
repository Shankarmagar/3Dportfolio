import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../style"
import { fadeIn, textVariant } from "../utils/motion"

import web from "../assets/Web.png"
import backend from "../assets/Programming.png"
import mobile from "../assets/Smartphone.png"
import ai from "../assets/Brain.png"

import { SectionWrapper } from "../hoc"

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: ai,
  },
]

interface ServiceCardProps {
  index: number
  title: string
  icon: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50} className="w-40 sm:w-48 md:w-56 lg:w-60">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-[#0c131f] rounded-[20px] py-3 px-3 sm:py-4 sm:px-4 md:py-5 md:px-6 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px]
          flex flex-col justify-center items-center text-center"
        >
          <img
            src={icon}
            alt={title}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain mb-2 sm:mb-3"
          />

          <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.SectionSubText}>Introduction</p>
        <h2 className={styles.SectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-base sm:text-lg max-w-3xl leading-relaxed"
      >
        As a motivated computer science student, I have developed strong skills
        in software engineering and data analysis. I’ve built iOS and Android
        apps, gaining expertise in Java, Swift, Python, HTML, CSS, and
        JavaScript.
        <br /><br />
        Currently, as a Global Strategy and Operations Data Analyst Intern at
        LinkedIn, I use SQL (Trino) and Tableau to extract and analyze large
        datasets and create interactive dashboards.
      </motion.p>

      <div className="ml-16 mt-16 sm:mt-20 grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-1 lg:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")
