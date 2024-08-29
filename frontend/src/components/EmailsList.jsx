import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import EmailCard from './EmailCard';
import { MailContext } from '../contexts/MailContext';

const EmailsList = () => {
    const { setEmail } = useContext(MailContext); 
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        // Fetch emails from backend when the component mounts
        axios.get('https://bobcyberwardenfinal.azurewebsites.net/emailclassify/get_all_emails')
            .then(response => {
                // Assuming the response is in the correct format as provided in your sample
                setEmails(response.data);
            })
            .catch(error => {
                console.error('Error fetching emails:', error);
            });
    }, []);

    return (
        <div className='flex flex-col py-4'>
            <div className='flex justify-between w-full px-4'>
                <input className='p-2 w-full' placeholder='Search Mail' />
                <button className='p-2 bg-black text-white'>Search</button>
            </div>
            <hr className='border-black mt-4' />

            {emails.map((email, index) => (
                <EmailCard
                    application_id={email.application_id} // or a different field for the application ID
                    key={email.application_id}
                    senderName={email.email_id} // or a different field for the sender's name
                    urgency={email.urgency}
                    time={new Date(email.classification_date).toLocaleString()} // Convert date to a readable format
                    title={email.summary} // Using summary as the title
                    preview={email.email_content} // Using email content as preview
                    sentiment={email.sentiment}
                    email={email.email_id}
                    ai_generated_response={email.ai_generated_response}
                />
                
            ))}
        </div>
    );
};

export default EmailsList;
