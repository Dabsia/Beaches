import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'
import DateContainer from '../DateContainer/DateContainer'

const Details = () => {
  return (
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div className='py-4'>
                  <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                  <p>Ullamco enim reprehenderit aute esse sint laborum occaecat deserunt eiusmod voluptate magna quis dolor. Veniam do velit labore officia duis occaecat sint ad velit commodo id esse laboris. Aute consequat velit magna nisi ea. Qui consequat do anim labore non eu magna et officia. Officia anim in cupidatat pariatur deserunt exercitation velit. Cillum nostrud deserunt nisi deserunt cupidatat magna occaecat culpa aliquip reprehenderit. Adipisicing minim dolore eu esse nulla eu exercitation quis exercitation culpa.</p>
              </div>
              <div className='grid sm:grid-cols-2 gap-8 py-4'>
                  <div className='flex flex-col lg:flex-row items-center text-center'>
                      <button><RiCustomerService2Fill size = {50} /></button>
                      <div>
                          <h3 className='py-2'>LEADING SERVICE</h3>
                          <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                      </div>
                  </div>
                  <div className='flex flex-col lg:flex-row items-center text-center'>
                      <button><MdOutlineTravelExplore size = {50} /></button>
                      <div>
                          <h3 className='py-2'>AUTOMATED SERVICE</h3>
                          <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                      </div>
                  </div>
              </div>
          </div>
          
        <DateContainer />

    </div>
  )
}

export default Details


