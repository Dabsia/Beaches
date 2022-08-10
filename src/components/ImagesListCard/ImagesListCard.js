import React from 'react'

const ImagesListCard = ({img, text}) => {
  return (
    <div className='relative'>
        <img className='object=cover h-full '  src={img} alt='/' />
        <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full'>
            <p className='left-4 bottom-4 text-2xl font-bold text-white absolute '>{text}</p>
        </div>
    </div>            
  )
}

export default ImagesListCard

