'use client'
import Typewriter from '@/Components/Typwriter'
import { Bio } from '@/Data/Mydata'
import Image from 'next/image'





const About = () => {
  return (
    <div className='w-full  h-full p-[5%]'>
            <div  className='max-w-[1240px] mx-auto flex  justify-center h-full '>
    <div className='w-full h-full absolute z-0'>
    
      
    </div>
    <section className='w-[50%] mx-2 px-1 z-10 '>

    <h4>About</h4>
    <h1>Who I am</h1>
    <p>
          
    <Typewriter text={Bio.description} 
    delay={20} />
      
      </p>
      <br></br>
      <ul>
        <li className='list-disc'> 
          {Bio.roles[0]}
        </li>
        <li className='list-disc'> 
          {Bio.roles[1]}
        </li>
        <li className='list-disc'> 
          {Bio.roles[2]}
        </li>
        <li className='list-disc'> 
          {Bio.roles[3]}
        </li>
        <li className='list-disc'> 
          {Bio.roles[4]}
        </li>
      </ul>

</section>
      
      <div className='rounded-2xl shadow-sm shadow-white  h-[30%] p-4 border  '> 
        <div>
        <Image src="/laptop.png" alt='image' width={300} height={300}/>
        </div>
        <div className='text-center'>
        <button type='button' className='bg-blue-700 p-2 my-4 rounded hover:scale-95 animate-pulse duration-100 cursor-pointer'>Download Resume</button>  
        </div>
      </div>
      
      </div>
     

    </div>
  )
}

export default About
