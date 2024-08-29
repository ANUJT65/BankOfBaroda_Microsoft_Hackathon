import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import EmailChat from './EmailChat';
import EmailReply from './EmailReply';
import { MailContext } from '../contexts/MailContext'; // Ensure this matches your file path and naming

const EmailSingle = () => {
    const { singlemail, setEmail } = useContext(MailContext);
    const [mailContent, setMailContent] = useState(singlemail.ai_generated_response || '');

    useEffect(() => {
        // Define the function to fetch email data by application_id
        const fetchEmailData = async () => {
            try {
                // Make an Axios GET request to your API endpoint
                const response = await axios.get('https://bobcyberwardenfinal.azurewebsites.net/emailclassify/email_by_applicationid', {
                    params: { application_id: singlemail.application_id }
                });

                // Update the context with the fetched data
                if (response.data && response.data.length > 0) {
                    setEmail(response.data[0]); // Assuming response.data is an array of email objects
                    setMailContent(response.data[0].ai_generated_response || ''); // Update the state with fetched content
                } else {
                    console.log('No data found for this application ID.');
                }
            } catch (error) {
                console.error('Error fetching email data:', error);
            }
        };

        // Call the function if application_id is present

    }, [singlemail.application_id, setEmail]);

    const handleChange = (event) => {
        setMailContent(event.target.value); // Handle changes to the input field
    };

    return (
        <div className='p-6 flex flex-col'>
            <div className='text-2xl font-bold'>{singlemail.senderName}</div>
            <div className=''>{singlemail.email}</div>
            <div className='flex justify-center mt-4 text-orange-500 font-bold italic'>{singlemail.title}</div>
            <hr className='border-black mt-2' />
            <div className='flex justify-between mt-4'>
                <div className='flex flex-col'>
                    <div className='font-bold'>Application Id</div>
                    <div>{singlemail.application_id}</div>
                </div>
            </div>
            <EmailChat />
            <EmailReply  /> {/* Pass the replyContent prop to EmailReply */}

            <div className='flex flex-col w-full px-4'>
    <textarea 
        className='border border-gray-600 p-2 w-full resize-none' 
        value={singlemail.ai_generated_response} // Use value with onChange handler for editable field
        onChange={handleChange} // Add onChange handler to make the field editable
        rows={9} // Set initial rows
    />

    <button className='p-2 bg-orange-500 text-white mt-2'>Send</button>
</div>
        </div>
    );
};

export default EmailSingle;
