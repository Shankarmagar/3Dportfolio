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
    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-[#0c131f] rounded-[20px] py-5 px-10 min-h-[260px]
          flex flex-col justify-evenly items-center"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.SectionSubText}>Introduction</p>
        <h2 className={styles.SectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] "
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

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
