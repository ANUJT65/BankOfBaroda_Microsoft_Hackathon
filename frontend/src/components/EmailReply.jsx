import React, { useContext } from 'react';
import { MailContext } from '../contexts/MailContext'; // Ensure this matches your file path and naming

const EmailReply = () => {
  const { singlemail } = useContext(MailContext); // Use useContext within the component

  return (
    <div className='flex flex-col items-end mb-4 p-4'>
      <div className='bg-gray-100 rounded-lg py-4 px-6 text-left text-black w-full max-w-2xl'>
        <pre className='whitespace-pre-wrap'>{singlemail.ai_generated_response || "No reply content available"}</pre>
      </div>
      <div className='bg-black rounded-full p-2 w-10 h-10 flex items-center justify-center font-bold text-white mt-2'>
        AT
      </div>
    </div>
  );
};

export default EmailReply;
