import React, { useState, useEffect } from 'react';
import TableEntry from './TableEntry';
import EmailEntry from './EmailEntry';

const EmailsTable = () => {
  const [data, setData] = useState(null); // State to hold response data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const postData = async () => {
      const url = 'http://127.0.0.1:5000/bussinessloan/calculate_and_send';
      const bodyData = {
        "user_id": "1273",
        "link": "https://raw.githubusercontent.com/ANUJT65/bob_hackathon/main/backend/business%20form%20(2).jpg"
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error.message);
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    postData();
  }, []); // Empty dependency array ensures this runs once when component mounts

  const emails = [
    {
      sender: 'Bank of America',
      preview: 'Hello Sir, I on behalf of Bank of America would like to extend a heartf...',
      time: '9:30 PM',
      read: false
    },
    {
      sender: 'Ravindra Jadeja',
      preview: 'There was an unauthorized Rs50000 withdrawal from my account on...',
      time: '11:11 AM',
      read: true
    },
    // Add more email objects here...
  ];

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-left px-4 py-2">Sender</th>
              <th className="text-left px-4 py-2">Body</th>
              <th className="text-left px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <EmailEntry
                key={index} // Add a unique key prop
                sender={email.sender}
                preview={email.preview}
                time={email.time}
                read={email.read}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmailsTable;
