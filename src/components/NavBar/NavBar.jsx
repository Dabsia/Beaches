import React, {useState} from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {FaFacebook, FaTwitter,FaYoutube,FaPinterest,FaInstagram} from 'react-icons/fa'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(prev => !prev)
  }

  return (
    <nav className='flex justify-between z-10 items-center w-full px-4 absolute text-white h-20'>
          <div>
            {!nav && <h1>BEACHES.</h1>}
          </div>
          <ul className='hidden md:flex'>
              <li>Home</li>
              <li>Destinations</li>
              <li>Travel</li>
              <li>Views</li>
              <li>Books</li>
      </ul>
      
      <div className='hidden md:flex'>
        <BiSearch className='mr-2' size = {20}/>
        <BsPerson size = {20}/>
      </div>
      {/**Hamburger */}
      <div className='md:hidden z-10'>
        {nav ? <AiOutlineClose size = {20} onClick = {handleNav} className = 'text-black' / > :
          <HiOutlineMenuAlt4 size={20} onClick = {handleNav} />}
      </div>
      {/**Mobile Menu */}
      <div className={ nav ? 'absolute left-0 [-100%] top-0 w-full bg-gray-100/90 px-4 py-7 text-black flex flex-col' : 'absolute left-[-100%]' }>
        <ul >
          {nav && <h1>BEACHES.</h1>}
              <li className='border-b'>Home</li>
              <li className='border-b'>Destinations</li>
              <li className='border-b'>Travel</li>
              <li className='border-b'>Views</li>
          <li className='border-b'>Books</li>
          <div className='flex flex-col '>
            <button className='my-4'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className = 'icon' />
            <FaTwitter className = 'icon' />
            <FaYoutube className = 'icon' />
            <FaPinterest className = 'icon' />
            <FaInstagram className = 'icon' />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
