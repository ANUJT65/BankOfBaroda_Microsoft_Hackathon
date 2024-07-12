import React from 'react'
import Navbar from '../components/Navbar'
import ProgressBar from '../components/ProgressBar'
import ApplicationCard from '../components/ApplicationCard'
import DocumentCard from '../components/DocumentCard'

const Application = () => {
    const documents = [
        {
            name: 'Attested Form',
            uploaded: true
        }, 
        {
            name: 'E-Aadhaar',
            uploaded: false
        },
        {
            name: 'Passport Size Photograph',
            uploaded: false
        }
    ]


  return (
    <>
    <Navbar />
    <div className='flex'>
        <ProgressBar />
        <div className='flex flex-col p-5'>
            <div className='text-2xl font-bold text-black'>
                Upload the following documents:
            </div>
            <div>
                {documents.map((item, index) =>(
                    <DocumentCard key={index} name={item.name} uploaded={item.uploaded} />
                ))}
            </div>
            <button className='bg-[#ff5b2e] text-white text-2xl font-bold p-2'>Next</button>
        </div>
    </div>
    </>
  )
}

export default Application