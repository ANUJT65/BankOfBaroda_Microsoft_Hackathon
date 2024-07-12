import React from 'react'

const ApplicationsTable = () => {
  return (
    <div className='flex flex-col flex-grow'>
        <div className='flex justify-between'>
            <div>Flex</div>
            <div>Type</div>
            <div>Name of Applicant</div>
            <div>Azure ML Score</div>
        </div>
        <br className='border border-t border-black' />
    </div>
  )
}

export default ApplicationsTable