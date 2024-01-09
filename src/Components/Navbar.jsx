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
    <section className='fixed w-full h-20 shadow-xl z-[100]  bg-black/100'>
        
    <div className='flex justify-between items-center w-full h-full px-2 border-b 2xl:px-16' >
    <pre className='flex text-xl'>
    <FaLaptopCode size={30}/> Alka Rathod  </pre>
    
    <div>
        <ul className='hidden md:flex'>
    <Link href='/'>
        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
    </Link>
    <Link href='/Projects'>
        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
    </Link>
    <Link href='/Skills'>
        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
    </Link>
    <Link href='/About'>
        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
    </Link>
    <Link href='/Contact'>
        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
    </Link>
        </ul>
    </div>
    <div className='md:hidden' onClick={handleNav}>
        <AiOutlineMenu size={25}/>
        
    </div>
<div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
<div className={nav ? 'fixed left-0 top-0 w-[70%] drop-shadow-xl sm:w-[60%] md:w-[45%] h-screen bg-black/100 p-10 ease-in duration-500 ': 'fixed left-[-120%] top-0  p-10 ease-in duration-500 '}>

        <div className='pt-40'>
    <p className='uppercase tracking-widest text-'> Let's Connect </p>
    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300'>
        <FaLinkedin size={25} />
    </div>
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300'>
        <FaGithub size={25}/>
    </div>
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300'>
        <AiOutlineMail size={25}/>
    </div>
    <div className='rounded-full shadow-lg shadow-gray-400 p4 cursor-pointer hover:scale-75 ease-in duration-300'>
        <BsPersonFill size={25}/>
    </div>
    </div>
    </div>
</div>
</div>

    </div>
    </div>
    
    </section>
  )
}

export default Navbar
