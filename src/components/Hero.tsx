import { motion } from 'framer-motion';
import { styles } from '../style.ts';
import HeroCanvas from './HeroCanvas.tsx'

const Hero = () => {
  return (
    <section className='relative w-full h-screen ms-auto flex items-center justify-center'>
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] sm:top-[100px] lg:top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center lg:items-center gap-8 lg:gap-5`}>
        
        {/* Violet gradient line with fade - Hidden on mobile, visible on larger screens */}
        <div className='hidden lg:flex flex-col justify-center items-center mt-5 order-2 lg:order-1'>
          {/* Dot at the top */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          
          {/* Gradient line */}
          <div 
            className='w-1 h-80'
            style={{
              background: 'linear-gradient(180deg, #915eff 0%, #6c00ff 50%, #e31ed6 80%, transparent 100%)'
            }}
          />
        </div>

        {/* Text content */}
        <div className='flex-1 max-w-4xl text-center lg:text-left order-1 lg:order-2'>
          <h1 className={`${styles.heroHeadText} text-white mb-4 lg:mb-0`}>
            Hi, I am <span className='text-[#915eff]'>Shankar Ale Magar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-50 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0`}>
            Aspiring Software Engineer, Ex Data Analytics Intern @ LinkedIn, Ex Software Engineer @ Mangomentor
          </p>
        </div>
      </div>
  
      <HeroCanvas />

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-16 sm:bottom-20 lg:bottom-36 w-full flex justify-center items-center'>
        <a href='#about' className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-white transition-colors'>
            <motion.div 
              animate={{ y: [0,24,0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
