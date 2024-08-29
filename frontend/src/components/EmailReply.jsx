import React, { useContext } from 'react';
import { MailContext } from '../contexts/MailContext';

const EmailReply = ({ replyContent }) => {
  const { singlemail } = useContext(MailContext);

  // Use either the replyContent prop or the context's ai_generated_response
  const contentToDisplay = replyContent || singlemail.ai_generated_response || "No reply content available";

  return (
    <div className='flex flex-col items-end mb-4 p-4'>
      <div className='bg-gray-100 rounded-lg py-4 px-6 text-left text-black w-full max-w-2xl'>
        <pre className='whitespace-pre-wrap'>{contentToDisplay}</pre>
      </div>
      <div className='bg-black rounded-full p-2 w-10 h-10 flex items-center justify-center font-bold text-white mt-2'>
        AT
      </div>
    </div>
  );
};

export default EmailReply;
