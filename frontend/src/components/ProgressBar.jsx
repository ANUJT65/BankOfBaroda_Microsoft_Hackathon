import React from 'react';
import ApplicationStep from './ApplicationStep';

const Sidebar = () => {
    const steps = ['Attach Documents', 'Add Information', 'Sign Attestation', 'Submit Application'];

  return (
    <div className='flex flex-col h-screen bg-orange-100 w-1/6 p-4'>
        {steps.map((step, index) => (
          <ApplicationStep name={step} index={index+1} />
        ))}
    </div>
  );
};

export default Sidebar;
