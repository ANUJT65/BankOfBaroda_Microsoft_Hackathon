import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import EmailCard from './EmailCard';
import { MailContext } from '../contexts/MailContext';

const EmailsList = () => {
    const { setEmail } = useContext(MailContext); 
    const [emails, setEmails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    // Filter emails based on search term
    const filteredEmails = emails.filter(email =>
        email.email_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort emails by priority (ascending)
    const sortedEmails = [...filteredEmails].sort((a, b) => a.priority - b.priority);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        // Optionally, you could trigger additional search logic here if needed
    };

    return (
        <div className='flex flex-col py-4'>
            <div className='flex justify-between w-full px-4'>
                <input
                    className='p-2 w-full'
                    placeholder='Search Mail'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button
                    className='p-2 bg-black text-white'
                    onClick={handleSearchClick}
                >
                    Search
                </button>
            </div>
            <hr className='border-black mt-4' />

            {sortedEmails.map((email, index) => (
                <EmailCard
                    key={email.application_id} // Ensure unique key for each email card
                    senderName={email.email_id} // or a different field for the sender's name
                    urgency={email.urgency}
                    time={new Date(email.classification_date).toLocaleString()} // Convert date to a readable format
                    title={email.summary} // Using summary as the title
                    preview={email.email_content} // Using email content as preview
                    sentiment={email.sentiment}
                    email={email.email_id}
                    application_id={email.application_id}
                    ai_generated_response={email.ai_generated_response}
                    reply_message={email.reply_message}
                    email_content={email.email_content}
                    category={email.category}
                    priority={email.priority}
                />
            ))}
        </div>
    );
};

export default EmailsList;
