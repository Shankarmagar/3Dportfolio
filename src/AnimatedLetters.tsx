import { motion } from 'framer-motion'

interface AnimatedLettersProps {
  strArray: string[]
  idx: number
  hover?: boolean
}

const AnimatedLetters = ({ strArray, idx, hover = false }: AnimatedLettersProps) => {
  return (
    <span className="inline-block">
      {strArray.map((char, i) => (
        <motion.span
          key={char + i}
          className="
            inline-block min-w-[0.6rem]
            text-4xl sm:text-5xl md:text-6xl
            will-change-transform
          "
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: hover ? [0, -6, 0] : 0,
          }}
          transition={{
            delay: (i + idx) * 0.05,
            duration: 0.8,
            type: 'spring',
            stiffness: 260,
            damping: 18,
            repeat: hover ? Infinity : 0,
            repeatDelay: 2,
          }}
          whileHover={{
            y: -10,
            scale: 1.2,
            color: '#facc15',
            transition: {
              type: 'spring',
              stiffness: 500,
              damping: 10,
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default AnimatedLetters
