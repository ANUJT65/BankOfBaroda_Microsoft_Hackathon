import React from 'react';

const MLScore = ({ azure_ml_score }) => {
  let score = "undefined";

  if (azure_ml_score === 1) score = "Medium";
  else if (azure_ml_score === 2) score = "Safe";
  else score = "Risky";

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
      textColor: "text-black"
    },
    undefined: {
      start: "#808080", // gray
      end: "#A9A9A9", // light gray
      textColor: "text-white"
    }
  };

  const { start: gradientStart, end: gradientEnd, textColor } = gradientColors[score] || gradientColors.undefined;

  return (
    <div className={`mt-10 bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] rounded flex flex-col p-5`}>
      <div className={`${textColor} text-sm`}>Azure ML Prediction</div>
      <div className={`${textColor} text-4xl font-bold`}>{score}</div>
      <div className={`${textColor} text-xl mt-2`}>Yeh good lekin good matlab jaggery aur jaggery se aadmi fat hota hai</div>
    </div>
  );
}

export default MLScore;
