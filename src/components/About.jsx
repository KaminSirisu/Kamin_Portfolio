import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc/index.js';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="shadow-card p-[1px] rounded-[20px] w-full green-pink-gradient"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='flex flex-col justify-evenly items-center bg-tertiary px-12 py-5 rounded-[20px] min-h-[280px]'
        >
          <img src={icon} alt={title} className='rounded-xl w-16 h-16 object-contain'/>
          <h3 className='font-bold text-[20px] text-white text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-[17px] text-secondary leading-[30px]'
      >
        {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}I'm Guy, a Digital Engineering student at SIIT, Thammasat University (GPA 3.35/4.00),
        passionate about web development, AI, and real-world problem-solving. I'm skilled in
        JavaScript, React, Next.js, Node.js, Python, and Java, with experience in 3D graphics and
        competitive programming.<br />
        {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}I'm a quick learner who thrives on consistency and discipline to get the job done. My proven
        abilities are demonstrated through robotics competitions, competitive programming, and
        impactful personal and academic projects. My inspirational quote is: 'Success doesn't come
        from what you do occasionally. It comes from what you do consistently'.
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");