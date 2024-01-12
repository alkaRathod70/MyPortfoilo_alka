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
    <header className="text-gray-600 body-font  ">
  <div className="container mx-auto flex flex-row justify-center p-5 flex md:flex-row items-center bg-gray-800">
  
<nav className="flex justify-center  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex md:flex-wrap items-center text-base justify-center"> 
           <ul className='flex text-white flex-row gap-20 justify-center ml-5 p-10 mb-10'>
               
     <Link href='/'> 
      <li className='ml-10 text-sm uppercase hover:border-b 'style={{padding:"10px"}}> Home</li>
    </Link>
     <Link href='/Projects'>
       <li className='ml-10 px-4 text-sm uppercase hover:border-b' style={{padding:"10px"}}> Projects</li>
    </Link>
    <Link href='/Skills'>
       <li className='ml-10 px-4 text-sm uppercase hover:border-b'style={{padding:"10px"}}> Skills</li>
     </Link>
    <Link href='/About'>
        <li className='ml-10 text-sm uppercase hover:border-b'style={{padding:"10px"}}> About</li>
 </Link>
    <Link href='/Contact'>
         <li className='ml-10 text-sm uppercase hover:border-b'style={{padding:"10px"}}>Contact</li>
     </Link>
     </ul>
    </nav>
  </div>
</header>
  
  )
}

export default Navbar
