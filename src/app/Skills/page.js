import React from 'react'
import Image from 'next/image'
import { skills,Bskills,Oskills } from '@/Data/Mydata'


const Skills = () => {
  return (
    <section class="text-white body-font py-20">
      <h3>Front End Developer</h3>
      <div class="flex flex-wrap m-2 text-center items-center justify-center">
        
      {skills.map(skills=>
      
      <div class="p-1 w-full  md:w-1/4 sm:w-1/2 ">
        <div class="border-2 border-gray-800 px-1 py-1 rounded-lg">
         <div className='flex items-center justify-center'>
         <img src={skills.image} width={50} height={50} />
         </div>
         <label> {skills.name}</label>
         
        </div>
      </div>
        
            
        )}
        </div>
        {/* ---------------------------------- Back end*/}

        <h3> Learing Back End Developer</h3>
      <div class="flex flex-wrap m-2 text-center items-center justify-center">
        
      {Bskills.map(skills=>
      
      <div class="p-1 w-full  md:w-1/4 sm:w-1/2 ">
        <div class="border-2 border-gray-800 px-1 py-1 rounded-lg">
         <div className='flex items-center justify-center'>
         <img src={skills.image} width={50} height={50} />
         </div>
         <label> {skills.name}</label>
         
        </div>
      </div>
        
            
        )}
        </div>
        {/* Other Dev Tools */}
        
      
        <h3>Other Tools</h3>
      <div class="flex flex-wrap m-2 text-center items-center justify-center">
        
      {Oskills.map(Oskills=>
      
      <div class="p-1 w-full  md:w-1/4 sm:w-1/2 ">
        <div class="border-2 border-gray-800 px-1 py-1 rounded-lg">
         <div className='flex items-center justify-center'>
         <img src={Oskills.image} width={50} height={50} />
         </div>
         <label> {Oskills.name}</label>
         
        </div>
      </div>
        
            
        )}
        </div>
        
    </section>
  )
}

export default Skills
