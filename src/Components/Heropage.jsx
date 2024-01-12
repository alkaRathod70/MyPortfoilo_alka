import React from 'react'
import { Bio } from '@/Data/Mydata'
import { FaGithub, FaLaptopCode, FaLinkedin } from "react-icons/fa"
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { BsPersonFill} from 'react-icons/bs'


const Heropage = () => {
  return (
    <section className='w-full h-screen text-center'> 
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
    <div>
    <p>
    Let's Code Success Together
    </p>
    <h1 className='text-4xl pt-2'> Hi, I'm <span className='text-yellow-300'>
        {Bio.name}
       </span>
        </h1> 
        <h1 className='text-4xl pt-6'> A Front End Web Developer
       
        </h1> 
        <p className='py-4 text-gray-300 max-w-[70%] m-auto'>
        I am a web development trainee specializing in front-end technologies, passionately dedicated to creating outstanding digital experiences. Currently, my emphasis is on building responsive front-end web applications while actively learning and exploring back-end technologies.
        
        </p>
    
    <div className='flex items-center justify-center m-auto py-4 max-w-[630px]'>
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300 ml-10'>
        <FaLinkedin size={35} />
    </div>
    
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300'>
        <FaGithub size={35}/>
    </div>
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300'>
        <AiOutlineMail size={35}/>
    </div>
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300'>
        <BsPersonFill size={35}/>
    </div>
    </div>

    </div>
    
    </div>    

    </section>
  )
}

export default Heropage
