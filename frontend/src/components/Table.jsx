import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ header, content }) => {
  return (
    <table className='mt-2 table-auto w-full'>
      <thead className='bg-gray-100'>
        <tr>
          {header.map((h, index) => (
            <th key={index} className='px-4 py-2 text-left'>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.map((entry, rowIndex) => (
          <tr key={rowIndex} className='border-b'>
            {Object.entries(entry).map(([key, value], colIndex) => (
              <td key={colIndex} className='px-4 py-2 text-left'>
                {key === 'Application ID' ? (
                  <Link to={`/singleapplication/${value}`} className='text-blue-500 hover:underline'>
                    {value}
                  </Link>
                ) : (
                  value
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
