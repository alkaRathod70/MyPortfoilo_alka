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
    <section className='fixed w-full h-20 shadow-xl z-[100]  bg-black/100 flex justify-between items-center w-full'>
        
    <div className='flex justify-between items-center w-full h-full px-2 border-b 2xl:px-16' >
    <pre className='flex text-xl'>
    <FaLaptopCode size={30}/> Alka Rathod </pre>
    
    <div  className='flex justify-between items-center w-full '>
        <ul >
            <li>
    <Link href='/'> </li>
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
      </div>
    
    </section>
  )
}

export default Navbar
