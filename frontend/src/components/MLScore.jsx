import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MLScore = ({ azure_ml_score, data_of_post_request }) => {
  const [result, setResult] = useState({ outcome: '', reasoning: '' }); // State to hold the result from the POST request
  const [loading, setLoading] = useState(true); // State to indicate if the data is still being loaded

  let score = "undefined";
  console.log('Azure ML Score:', azure_ml_score); // Debugging log
  if (azure_ml_score == 1) score = "Medium";
  else if (azure_ml_score == 2) score = "Safe";
  else if (azure_ml_score == 0 )score = "Risky";

  const gradientColors = {
    Safe: {
      start: "#008000", // green
      end: "#49A402", // light green
      textColor: "text-white"
    },
    Risky: {
      start: "#FF0000", // red
      end: "#000000", // black
      textColor: "text-white"
    },
    Medium: {
      start: "#E3DA00", // yellow
      end: "#FFF963", // light yellow
      textColor: "text-gray-900" // darker text color
    },
    undefined: {
      start: "#808080", // gray
      end: "#A9A9A9", // light gray
      textColor: "text-white"
    }
  };
  
  const { start: gradientStart, end: gradientEnd, textColor } = gradientColors[score] || gradientColors.undefined;

  useEffect(() => {
    const fetchResult = async () => {
      try {
        console.log('Sending POST request with data:', data_of_post_request); // Debugging log
        const response = await axios.post('http://127.0.0.1:5000/bussinessloan/classify', data_of_post_request);
        console.log('Received response:', response.data); // Debugging log
        setResult({
          outcome: response.data.outcome,
          reasoning: response.data.reasoning
        });
      } catch (error) {
        setResult({ outcome: 'Error', reasoning: 'Error fetching result' });
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, []); // Empty array ensures the effect runs only once

  console.log('Rendered result:', result); // Debugging log

  return (
    <div className={`mt-10 bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] rounded flex flex-col p-5`}>
      <div className={`${textColor} text-sm`}>Azure ML Prediction</div>
      <div className={`${textColor} text-4xl font-bold`}>{score}</div>
      <div className={`${textColor} text-xl mt-2`}>
        {loading ? 'Loading...' : `Reasoning: ${result.reasoning}`}
      </div>
    </div>
  );
};

export default MLScore;
