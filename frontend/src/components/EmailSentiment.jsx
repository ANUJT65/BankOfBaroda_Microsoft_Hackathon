import React from 'react';

const EmailSentiment = ({ sentiment }) => {
  let color = '000000';
  if (sentiment === 'negative') {
    color = '#FF0000';
  }  else {
    color = '#008000';
  }

  return (
    <div className={`text-left flex justify-between py-3`}>
      <div className='font-white text-xl'>Email sentiment</div>
      <div className={`text-[${color}] p-2 font-bold`}>{sentiment}</div>
    </div>
  );
}

export default EmailSentiment;
