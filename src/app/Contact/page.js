
import React from 'react'

import { FaLinkedin,FaGithub } from 'react-icons/fa'


const Contact = () => {
  return (
    <div className='py-20 flex justify-center flex-col items-center'>
      <h1>Contact</h1>
      <h5> Get in Touch with me via Social Media or email </h5>
      <div className='flex m-4 justify-center gap-6'>
      <a href='https://www.linkedin.com/in/alka-rathod-1ba184285/'>
      <FaLinkedin size={35} /> linkedin
      </a>
      <a href='https://github.com/alkaRathod70'>
      <FaGithub size={35} /> Github
      </a> </div>
        
        </div>
        
        
  )
}

export default Contact