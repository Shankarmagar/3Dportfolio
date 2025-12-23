import { motion } from 'framer-motion';
import { styles } from '../style.ts';
import HeroCanvas from './HeroCanvas.tsx'

const Hero = () => {
  return (
    <section className='relative w-full h-screen ms-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className='w-100'>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'>Shankar Ale Magar</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-50`}>
        Aspiring Software Engineer, Ex Data Analytics Intern @ LinkedIn, Ex Software Engineer @ Mangomentor
        </p>
        </div>
      </div>
  
      <HeroCanvas />

      <div className='absolute xs:bottom-20 bottom:36 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'>
          <motion.div 
          animate={{
            y: [0,24,0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'

          }}
          className='w-3 h-3 rounded-full bg-white mb-1'/>
          </div>
        </a>
      </div>
      
    </section>
  )
}

export default Hero