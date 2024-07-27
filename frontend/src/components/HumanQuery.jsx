import React from 'react'

const HumanQuery = ({message}) => {
  return (
    <div className='mb-2 flex justify-end'>
    <div className='bg-black rounded bg-gray-100 pt-2 font-semibold px-3 text-left'>{message}</div>
    <div className='bg-black rounded-full p-2 w-10 font-bold text-center text-white text-s mr-2'>J</div>
    </div>
  )
}

export default HumanQuery