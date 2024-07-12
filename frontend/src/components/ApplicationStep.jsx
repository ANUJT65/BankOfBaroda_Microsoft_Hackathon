import React from 'react'

const ApplicationStep = ( {name, index} ) => {
  return (
    <div className='flex p-4 cursor-pointer rounded-md'>
        <div className='bg-[#ff5b2e] text-white p-2 font-bold mr-2'>{index}</div>
        <div className='font-bold pt-2'>{name}</div>
    </div>
  )
}

export default ApplicationStep