import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import EmailChat from './EmailChat';
import EmailReply from './EmailReply';
import { MailContext } from '../contexts/MailContext';

const EmailSingle = () => {
    const { singlemail, setEmail } = useContext(MailContext);
    const [mailContent, setMailContent] = useState(singlemail.ai_generated_response || '');
    const [newMailContent, setNewMailContent] = useState('');
    const [context, setContext] = useState('make it more personal');

    useEffect(() => {
        const fetchEmailData = async () => {
            try {
                const response = await axios.get('https://bobcyberwardenfinal.azurewebsites.net/emailclassify/email_by_applicationid', {
                    params: { application_id: singlemail.application_id }
                });

                if (response.data && response.data.length > 0) {
                    setEmail(response.data[0]);
                    setMailContent(response.data[0].ai_generated_response || '');
                } else {
                    console.log('No data found for this application ID.');
                }
            } catch (error) {
                console.error('Error fetching email data:', error);
            }
        };

        if (singlemail.application_id) {
            fetchEmailData();
        }
    }, [singlemail.application_id, setEmail]);

    const handleMailContentChange = (event) => {
        setMailContent(event.target.value);
    };

    const handleNewMailContentChange = (event) => {
        setNewMailContent(event.target.value);
    };

    const handleRegenerateContent = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/emailclassify/regenerate-response', {
                email_content: newMailContent,
                context: context,
            });

            if (response.data && response.data.response) {
                // Update mailContent with the data from the POST request
                setMailContent(response.data.response || '');
            }
        } catch (error) {
            console.error('Error regenerating email content:', error);
        }
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
            <EmailReply replyContent={mailContent} /> {/* Pass the updated mailContent as a prop */}

            {/* New Textarea and Button for Regenerating Email Content */}
            <div className='flex flex-col w-full px-4 mt-4'>
                <textarea
                    className='border border-gray-600 p-2 w-full resize-none'
                    value={newMailContent}
                    onChange={handleNewMailContentChange}
                    rows={6}
                    placeholder='Type here to regenerate email content...'
                />
                <button
                    className='p-2 bg-blue-500 text-white mt-2'
                    onClick={handleRegenerateContent}
                >
                    Regenerate Email Content
                </button>
            </div>

            {/* Existing Textarea for Main Email Content */}
            <div className='flex flex-col w-full px-4 mt-4'>
                <textarea
                    className='border border-gray-600 p-2 w-full resize-none'
                    value={mailContent}
                    onChange={handleMailContentChange}
                    rows={9}
                />
                <button className='p-2 bg-orange-500 text-white mt-2'>Send</button>
            </div>
        </div>
    );
};

export default EmailSingle;
