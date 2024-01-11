'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaLaptopCode, FaLinkedin } from "react-icons/fa"
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { BsPersonFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-row justify-center p-5 flex md:flex-row items-center ">
         <a class="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0 ml-0">
    <pre className='flex text-xl'>
    <FaLaptopCode size={30}/> Alka Rathod </pre>
      
    </a>
       <nav class="flex justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex md:flex-wrap items-center text-base justify-center"> 
           <ul className='flex text-white flex-row gap-20 justify-center ml-5'>
               
     <Link href='/'> 
      <li className='ml-12 text-sm uppercase hover:border-b 'style={{padding:"10px"}}> Home</li>
    </Link>
     <Link href='/Projects'>
       <li className='ml-12 px-4 text-sm uppercase hover:border-b' style={{padding:"10px"}}> Projects</li>
    </Link>
    <Link href='/Skills'>
       <li className='ml-12 px-4 text-sm uppercase hover:border-b'style={{padding:"10px"}}> Skills</li>
     </Link>
    <Link href='/About'>
        <li className='ml-12 text-sm uppercase hover:border-b'style={{padding:"10px"}}> About</li>
 </Link>
    <Link href='/Contact'>
         <li className='ml-12 text-sm uppercase hover:border-b'style={{padding:"10px"}}>Contact</li>
     </Link>
     </ul>
    </nav>
  </div>
</header>
  
  )
}

export default Navbar
