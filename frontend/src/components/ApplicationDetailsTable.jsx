import React from 'react';

const ApplicationDetailsTable = ({ details }) => {
  return (
    <table className='mt-2 table-auto w-full'>
      <tbody>
        {details.map((item, index) => (
          Object.entries(item).map(([key, value]) => (
            <tr key={index} className='border-b'>
              <th className='px-4 py-2 text-left font-semibold'>{key}</th>
              <td className='px-4 py-2 text-left'>{value}</td>
            </tr>
          ))
        ))}
      </tbody>
    </table>
  );
};

export default ApplicationDetailsTable;
