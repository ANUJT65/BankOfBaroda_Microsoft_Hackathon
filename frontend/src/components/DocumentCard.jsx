import React from 'react'

const DocumentCard = ({uploaded, name}) => {
  return (
    <div className='p-5 flex'>
        {uploaded? <></> : <button className='text-3xl border px-2 pb-2 border-gray-300'>+</button> }
        
        <div className='text-xl ml-3 pt-2'>{name}</div>
    </div>
    
  )
}

export default DocumentCard