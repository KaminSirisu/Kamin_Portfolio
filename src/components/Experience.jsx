import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import "react-vertical-timeline-component/style.min.css";

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';


const ExperienceCard = ( {experience} ) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="rounded-xl w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className='font-bold text-[24px] text-white'>{experience.title}</h3>
      <p className='font-semibold text-[16px] text-secondary' style={{ margin: 0}}>{experience.company_name}<br />{experience.path}</p>
    </div>

    <ul className='space-y-2 mt-5 ml-5 list-disc'>
      {experience.points.map((point, index) => (
        <li
          ley={`experience-point-${index}`}
          className='pl-1 text-[14px] text-white-100 tracking-wider'
        >
          {point}

        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>

      </motion.div>

      <div className='flex flex-col mt-20'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "education");