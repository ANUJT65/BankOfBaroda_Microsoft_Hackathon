import React from 'react'
import AttachedDoc from './AttachedDoc'

const AttachedDocs = () => {
  return (
    <div className='flex justify-start'>
    <div className='text-white mb-4 font-bold'>Attached Documents: </div>
    <AttachedDoc />
    </div>
  )
}

export default AttachedDocs