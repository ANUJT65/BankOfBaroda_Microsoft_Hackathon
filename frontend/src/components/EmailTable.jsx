import React from 'react';
import { Link } from 'react-router-dom';

const EmailTable = ({ header, content }) => {
  return (
    <div className='overflow-auto' style={{ height: '400px', width: '100%' }}>
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
                    <div className='relative overflow-hidden' style={{ maxHeight: '3em' }}>
                      <div className='line-clamp-2'>
                        {value}
                      </div>
                      <div className='absolute bottom-0 left-0 right-0' style={{
                        height: '1.5em',
                        background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8))',
                        pointerEvents: 'none'
                      }}></div>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailTable;
