import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative mx-auto w-full h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='bg-[#915eff] rounded-full w-5 h-5' />
          <div className='w-1 h-40 sm:h-80 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm  <span className='text-[#915eff]'>Kamin</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm studying Digital Engineering at <br className='hidden sm:block'/><span className='text-[#915eff]'>SIIT</span>, Thammasat University
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='bottom-25 xs:bottom-6 absolute flex justify-center items-center w-full'>
        <a href='#about'>
          <div className='flex justify-center items-start p-2 border-4 border-secondary rounded-3xl w-[35px] h-[64px]'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='bg-secondary mb-1 rounded-full w-3 h-3'
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero