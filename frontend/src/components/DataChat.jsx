import React, { useState, useEffect, useRef } from 'react';
import AIResponse from './AIResponse';
import HumanQuery from './HumanQuery';

const DataChat = () => {
  const [inputValue, setInputValue] = useState('');
  const [responses, setResponses] = useState([]);
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    try {
      const query = {
        query: inputValue // Use the input value for the query
      };

      const res = await fetch('http://127.0.0.1:5000/langchain/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponses((prevResponses) => [...prevResponses, { human: inputValue, ai: data.result.output }]);
      setInputValue(''); // Clear the input field after sending the query
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [responses]);

  return (
    <div className='col-span-3 bg-white flex flex-col p-5 h-full'>
      <div className='font-bold text-xl'>DataChat</div>
      <div className='text-[#666666]'>Chat with the database and customer application</div>
      <div className='flex flex-col mt-auto overflow-auto' style={{ maxHeight: '70vh' }}>
        {responses.map((response, index) => (
          <div key={index}>
            <HumanQuery message={response.human} />
            <AIResponse message={response.ai} />
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className='flex justify-between mt-4'>
        <input
          className='h-10 cursor pl-3 w-full mr-2 border border-black rounded'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your query..."
        />
        <button
          className='bg-[#FF5B2E] border border-black text-black px-2 rounded hover:bg-black hover:text-white font-bold'
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DataChat;
