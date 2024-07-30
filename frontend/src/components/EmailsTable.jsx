import React, { useEffect, useState } from 'react';

const EmailsTable = ({ category }) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    if (category) {
      const fetchEmails = async () => {
        try {
          const response = await fetch(`https://bobcyberwardenfinal.azurewebsites.net/emailclassify/${encodeURIComponent(category)}`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setEmails(data);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };

      fetchEmails();
    }
  }, [category]);

  return (
    <div>
      {emails.length > 0 ? (
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr className='bg-gray-100 border-b'>
              <th className='p-2 text-left'>Email ID</th>
              <th className='p-2 text-left'>Classification Date</th>
              <th className='p-2 text-left'>Email Content</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <tr key={email.application_id} className='border-b'>
                <td className='p-2'>{email.email_id}</td>
                <td className='p-2'>{new Date(email.classification_date).toLocaleString()}</td>
                <td className='p-2'>{email.email_content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center'>No emails found for this category.</p>
      )}
    </div>
  );
};

export default EmailsTable;
