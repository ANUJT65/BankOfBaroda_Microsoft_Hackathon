import React from 'react';

const EmailEntry = ({ sender, preview, time, read }) => {
  let styles = 'border-b bg-[#ffffffff]';

  if (!read) {
    styles = 'border-b bg-[#D9D9D9] font-bold';
  }

  return (
    <tr className={styles}>
      <td><input type="checkbox" /></td>
      <td className='font-bold'>{sender}</td>
      <td>{preview}</td>
      <td>{time}</td>
    </tr>
  );
};

export default EmailEntry;
