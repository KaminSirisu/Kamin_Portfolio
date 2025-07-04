import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { iconContacts } from '../constants';

// Crl9zxt_VUOTj0Olr
// template_5mxr4oj
// service_np2cdyg

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_np2cdyg', 
      'template_l3z443x', 
      {
        from_name: form.name,
        to_name: 'Kamin',
        from_email: form.email,
        to_email: 'Kaminsirisu@gmail.com',
        message: form.message,
      },
      "Crl9zxt_VUOTj0Olr",
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);

      console.log(error);
      alert('Something went wrong.')
    })
  }

  return (
    <div className='flex xl:flex-row flex-col-reverse gap-10 xl:mt-12 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>Email : Kaminsirisu@gmail.com</p>
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-8'
        >
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary px-6 py-4 border-none rounded-lg outline-none font-medium text-white placeholder:text-secondary'
            
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Email</span>
            <input 
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary px-6 py-4 border-none rounded-lg outline-none font-medium text-white placeholder:text-secondary'
            
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary px-6 py-4 border-none rounded-lg outline-none font-medium text-white placeholder:text-secondary'
            
            />
          </label>
          <button 
            type='submit' 
            className='bg-tertiary shadow-md shadow-primary px-8 py-3 rounded-xl outline-none w-fit font-bold text-white'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          
        </form>
        
        <div className='flex flex-row gap-5 mt-10'>
          <a href={iconContacts[0].link} className='bg-white rounded-3xl w-10 h-10' target="_blank">
            <img src={iconContacts[0].icon}/>
          </a>
          <a href={iconContacts[1].link} className='bg-white rounded-3xl w-10 h-10' target="_blank">
            <img src={iconContacts[1].icon}/>
          </a>
          <a href={iconContacts[2].link} className='bg-white rounded-2xl w-10 h-10' target="_blank">
            <img src={iconContacts[2].icon}/>
          </a>
        </div>

      </motion.div>
     

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 h-[350px] md:h-[550px] xl:h-auto'
      >
        <EarthCanvas />
      </motion.div>

     
    </div>
  )
}

export default SectionWrapper(Contact, "contact");