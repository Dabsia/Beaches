import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'

const sliderData = [
    {
        img: BoraBora,
        name: 'borabora'
    },
    {
        img: BoraBora2,
        name: 'borabora2'
    },
    {
        img: maldives,
        name: 'maldives'
    },
    {
        img: maldives2,
        name: 'maldives2'
    },
]

const Carosel = () => {

    const [slide, setSlide] = useState(0)

    const inCreaseSlider = () => {
        setSlide(slide === 0 ?  sliderData.length - 1 : slide - 1)
        
    }

      const reduceSlider = () => {
        setSlide(slide === sliderData.length - 1 ? 0 :slide + 1)
    }

  return (
      <div className='max-w-[1240px] mx-auto px-4 py-16 flex relative justify-center items-center'>
          <BsArrowLeftSquareFill onClick={reduceSlider} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' />
          <BsArrowRightSquareFill onClick={inCreaseSlider} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
          {
              sliderData.map((item, id) => {
                  return (
                      <div className={id === slide ? 'opacity-100': 'opacity-0'}
                          key={id}>
                          {id === slide && (<img className='w-full rounded-md' src = {item.img} alt = {item.name} />)}
                    
                  </div>)
            })
      }
    </div>
  )
}

export default Carosel
