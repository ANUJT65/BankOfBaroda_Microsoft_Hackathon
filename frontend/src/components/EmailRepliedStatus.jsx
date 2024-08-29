import React from 'react';

const EmailRepliedStatus = ({ replied }) => {
  let color = '#FF0000'; // Default color for "Not Replied"
  let statusText = 'Not Replied';

  if (replied!= 'Null') {
    color = '#72FE04'; // Color for "Replied"
    statusText = 'Replied';
  }

  return (
    <div className={`text-left flex justify-between py-3`}>
      <div className='font-white text-xl'>Email Status</div>
      <div className={`bg-[${color}] p-2 font-bold`}>{statusText}</div>
    </div>
  );
}

export default EmailRepliedStatus;
