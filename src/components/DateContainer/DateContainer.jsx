import React from 'react'

const DateContainer = () => {
    return (
      <div>
      
        <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border rounded-md p-2 my-2 outline-none'>
                        <option value = 'grande' >Grande Antique</option>
                        <option value = 'key_west' >Key West</option>
                        <option value = 'maldives' >Maldives</option>
                        <option value = 'cozumel' >Cozumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor = 'chkIn'>Check-In</label>
                    <input className='border rounded-md p-2 outline-none' id = 'chkIn' type = 'date' />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor='chkOut'>Check-In</label>
                    <input className='border rounded-md p-2 outline-none' id = 'chkOut' type = 'date' />
                </div>
                <button className='w-full my-4'>
                    Rates & Availability
                </button>
            </form>    
      </div>
  )
}

export default DateContainer
