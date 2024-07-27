import React from 'react'
import AIResponse from './AIResponse'
import HumanQuery from './HumanQuery'

const DataChat = () => {
  return (
    <div className='col-span-3 bg-white flex flex-col p-5 h-full'>
        <div className='font-bold text-xl'>DataChat</div>
        <div className='text-[#666666]'>Chat with the database and customer application</div>
        <div className='flex flex-col mt-auto'>
          <AIResponse message="sample ai response. mere sapno ki rani kab aayegi tu" />
          <HumanQuery message="gaana ga bsdk" />
          <div className='flex justify-between mt-auto'>
            <input className='h-10 cursor pl-3 w-full mr-2 border border-black rounded'></input>
            <button className='bg-[#FF5B2E] border border-black text-black px-2 rounded hover:bg-black hover:text-white font-bold'>Send</button>
          </div>
        </div>
      </div>
  )
}

export default DataChat