import React from 'react'
import Navbar from '../components/Navbar'
import Chat from '../components/Chat'
import VisChat from '../components/VisChat'

const Datavis = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <VisChat />
    </div>
  )
}

export default Datavis