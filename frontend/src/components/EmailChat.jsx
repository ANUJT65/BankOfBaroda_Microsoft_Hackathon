import React, { useContext } from 'react';
import { MailContext } from '../contexts/MailContext'; // Ensure this matches your file path and naming

const EmailChat = () => {
  const { singlemail, setEmail } = useContext(MailContext); 

  return (
    
    <div className='mb-2 flex justify-start items-center mt-4'>
      <div className='bg-orange-600 rounded-full p-2 w-10 h-10 flex justify-end font-bold text-white text-s mr-2'>
        PG
      </div>
      <div className='bg-gray-100 rounded-lg py-2 px-3 text-left text-black'>
        {singlemail.preview}
      </div>
    </div>
  );
};

export default EmailChat;
