import React from 'react';

const AIResponse = ({ message }) => {
  // Split the message by newlines and map each line to a <span> element for proper formatting
  const formattedMessage = message.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className='mb-2 flex justify-start items-center'>
      <div className='bg-orange-600 rounded-full p-2 w-10 h-10 flex items-center justify-center font-bold text-white text-s mr-2'>
        AI
      </div>
      <div className='bg-gray-100 rounded-lg py-2 px-3 text-left font-semibold text-black'>
        {formattedMessage}
      </div>
    </div>
  );
};

export default AIResponse;
