import React from 'react'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'
import maldives3 from '../../assets/maldives3.jpg'
import keywest from '../../assets/keywest.jpg'
import ImagesListCard from '../ImagesListCard/ImagesListCard'

const ImagesList = () => {
  return (
    <div className='max-w-[1240px] mx-auto gap-4 px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3'>
          <ImagesListCard img={BoraBora} text='BoraBora' />
          <ImagesListCard img = {BoraBora2} text = 'BoraBora2' />
          <ImagesListCard img = {maldives} text = 'Maldives' />
          <ImagesListCard img = {maldives2} text = 'Maldives2' />
          <ImagesListCard img = {maldives3} text = 'Maldives3' />
          <ImagesListCard img = {keywest} text = 'Keywest' />
    </div>
  )
}

export default ImagesList
