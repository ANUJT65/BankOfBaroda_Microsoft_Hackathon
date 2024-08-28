import React from 'react';

const EmailSentiment = ({ sentiment }) => {
  let color = '000000';
  if (sentiment === 'Good') {
    color = '#72FE04';
  }  else {
    color = '#FF0000';
  }

  return (
    <div className={`text-left flex justify-between py-3`}>
      <div className='font-white text-xl'>Email sentiment</div>
      <div className={`bg-[${color}] p-2 font-bold`}>{sentiment}</div>
    </div>
  );
}

export default EmailSentiment;
