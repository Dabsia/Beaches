import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import beachVid from '../../assets/beachVid.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted />
          <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30' />
          <div className='absolute top-0 w-full h-full p-4 text-white flex flex-col justify-center text-center'>
              <h1>First Class Travel</h1>
              <h2 className='py-4'>Top 1% Locations Worldwide</h2>
              <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px]sm:w-[400px] outline-none text-black' type = 'text' placeholder='Search Destinations' />
                  </div>
                  <div>
                      <button><AiOutlineSearch style={ {color: '#fff'}} size={20} className = 'icon'/></button>
                  </div>
              </form>
                  
          </div>
      </div>
      
  )
}

export default Hero
