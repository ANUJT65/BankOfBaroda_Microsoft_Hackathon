import React from 'react';

const MLScoreCard = ({ score }) => {
  let color = '000000';
  if (score === 'Safe') {
    color = '#72FE04';
  } else if (score === 'Review Needed') {
    color = '#FFF500';
  } else {
    color = '#FF0000';
  }

  return (
    <td className={`bg-[${color}] text-center font-bold`}>{score}</td>
  );
}

export default MLScoreCard;
