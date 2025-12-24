import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTypingProps {
  text: string
  typingSpeed?: number
  pauseTime?: number
}

const AnimatedTyping = ({
  text,
  typingSpeed = 80,
  pauseTime = 1500,
}: AnimatedTypingProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1))
        setIndex(index + 1)
      }, typingSpeed)
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index - 1))
        setIndex(index - 1)
      }, typingSpeed / 1.5)
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500)
    }

    return () => clearTimeout(timeout)
  }, [index, isDeleting, text, typingSpeed, pauseTime])

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        {displayedText.split('').map((char, i) => (
          <motion.span
            key={char + i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="
              inline-block min-w-[0.6rem]
              text-4xl sm:text-5xl md:text-6xl
              will-change-transform
            "
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Blinking Cursor */}
      <motion.span
        className="ml-1 text-purple-400 text-4xl sm:text-5xl md:text-6xl"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  )
}

export default AnimatedTyping
