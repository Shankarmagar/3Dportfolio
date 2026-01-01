import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = <P extends object>(Component: React.FC<P>, idName: string) =>
  function HOC(props: P) {
    return (
      <motion.section
        id={idName}
        className={`flex flex-wrap justify-center max-w-7xl mx-auto relative z-0`}
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component {...props} />
      </motion.section>
    )
  }

export default SectionWrapper
