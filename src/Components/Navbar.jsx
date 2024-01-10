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
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
    <pre className='flex text-xl'>
    <FaLaptopCode size={30}/> Alka Rathod </pre>
      
    </a>
    <ul className='flex text-white'>
    <li className='ml-10 text-sm uppercase hover:border-b'>
    <Link href='/'> 
      <li className='ml-10 text-sm uppercase hover:border-b'> Home</li>
    </Link></li>
     <Link href='/Projects'>
       <li className='ml-10 text-sm uppercase hover:border-b'> Projects</li>
    </Link>
    <Link href='/Skills'>
       <li className='ml-10 text-sm uppercase hover:border-b'> Skills</li>
     </Link>
    <Link href='/About'>
        <li className='ml-10 text-sm uppercase hover:border-b'> About</li>
 </Link>
    <Link href='/Contact'>
         <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
     </Link>
     </ul>
    
  </div>
</header>
  )
}

export default Navbar
