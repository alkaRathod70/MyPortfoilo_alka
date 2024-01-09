'use client'
import React,{useEffect} from 'react'
import { projects } from '@/Data/Mydata'
import { BsTypeH1 } from 'react-icons/bs'
import Image from 'next/image'
import { FaGithub, FaLaptop } from "react-icons/fa"
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'

import Link from 'next/link'
const Projects = () => {
useEffect(()=>{
  Aos.init({
    delay:500,
    duration:1000
  })
},[]) 
  return (
    <div className='py-20'>
 <section className="text-gray-400 body-font bg-gray-900 ">
        <div className="flex  flex-wrap m-4" >
     {
      projects.map(projects=>
       
      <div className="xl:w-full md:w-1/2 p-4" data-aos="flip-left" data-aos-anchor-placement="top-center">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg" >
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src={projects.image} alt="content" data-aos="fade-up" data-aos-delay="1500" width={400} height={400} loading="lazy" />
         
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">{projects.date}</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">{projects.title}</h2>
          <h3 className='text-lg '>
            {projects.category}
          </h3>
          <p className="leading-relaxed text-base">{projects.description}</p>
          <br />
          <p className='cursor-pointer flex gap-4'> 
            {/* <Link href={projects.github}>
            <FaGithub size={30}/>
            </Link>
            <Link href={projects.webapp}>
            <FaLaptop size={30}/>
            </Link> */}
            </p>
        </div>
      </div>
        )
     }
     </div>
      </section>
    </div>
  )
}

export default Projects