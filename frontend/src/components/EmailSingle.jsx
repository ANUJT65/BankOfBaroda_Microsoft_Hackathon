import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailChat from './EmailChat';
import EmailReply from './EmailReply';
import { MailContext } from '../contexts/MailContext';

const EmailSingle = () => {
    const { singlemail, setEmail } = useContext(MailContext);
    const [mailContent, setMailContent] = useState(singlemail.ai_generated_response || '');
    const [replyContent, setReplyContent] = useState(''); 
    const [message, setMessage] = useState(''); 

    useEffect(() => {
        // Update mailContent when singlemail changes
        setMailContent(singlemail.ai_generated_response || '');
    }, [singlemail]);

    const handleChange = (event) => {
        console.log('Mail content changed:', event.target.value);
        setMailContent(event.target.value);
    };

    const handleReplyContentChange = (event) => {
        console.log('Reply content changed:', event.target.value);
        setReplyContent(event.target.value);
    };

    const handleRegenerate = async () => {
        console.log('Regenerate button clicked with reply content:', replyContent);
    
        try {
            const response = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/emailclassify/regenerate-response', {
                email_content: singlemail.email_content, 
                context: replyContent
            });
            
            console.log('Mail content:', singlemail.email_content);
            console.log('Reply content:', replyContent);
    
            console.log('Response from handleRegenerate:', response.data);
            setEmail({ ...singlemail, ai_generated_response: response.data.response });
    
            if (response.status === 200) {
                setMailContent(response.data.response); 
                setMessage('Regenerated and updated'); 
                toast.success('Email content regenerated successfully!');
            } else {
                setMessage('Failed to regenerate');
                toast.error('Failed to regenerate email content');
            }
        } catch (error) {
            console.error('Error regenerating email content:', error);
            setMessage('Failed to regenerate');
            toast.error('Error regenerating email content');
        }
    };

    const handleSend = async () => {
        try {
            // First POST request
            const response = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/emailclassify/replymessage_by_applicationid', {
                application_id: singlemail.application_id,
                reply_message: mailContent
            });
            console.log('Mail content:', mailContent);
            console.log('Response from handleSend:', response.data);

            if (response.status === 200) {
                setMessage('Reply sent and saved'); 
            } else {
                setMessage('Failed to send reply');
                toast.error('Failed to send reply');
                return;
            }

            // Second POST request
            const emailResponse = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/ads/send_email', {
                subject: singlemail.title || 'Respond to your query',
                body: mailContent,
                recipient_email: 'anujtadkase@gmail.com'
            });


            if (emailResponse.status === 200 && emailResponse.data.status === 'success') {
                toast.success('Email sent successfully!');
            } else {
                setMessage(prevMessage => prevMessage + ' | Failed to send email');
                toast.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending reply or email:', error);
            setMessage('Failed to send');
            toast.error('Error sending reply or email');
        }
    };

    if (!singlemail) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-6 flex flex-col'>
            <ToastContainer /> {/* Add ToastContainer to your component */}
            <div className='text-2xl font-bold'>{singlemail.senderName || 'Sender Name'}</div>
            <div>{singlemail.email || 'Email'}</div>
            <div className='flex justify-center mt-4 text-orange-500 font-bold italic'>{singlemail.title || 'Title'}</div>
            <hr className='border-black mt-2' />
            <div className='flex justify-between mt-4'>
                <div className='flex flex-col'>
                    <div className='font-bold'>Application Id</div>
                    <div>{singlemail.application_id || 'Application ID'}</div>
                </div>
            </div>

            <EmailChat />
            <EmailReply replyContent={mailContent} /> 

            <div className='flex flex-col w-full px-4'>
                <textarea
                    className='border border-gray-600 p-2 w-full resize-none mb-2'
                    value={replyContent} 
                    onChange={handleReplyContentChange} 
                    rows={3} 
                    placeholder="Regenerate email content"
                />
                <button onClick={handleRegenerate} className='p-2 bg-blue-500 text-white mt-2'>
                    Regenerate Email Content
                </button>

                <textarea
                    className='border border-gray-600 p-2 w-full resize-none mb-2'
                    value={mailContent}
                    onChange={handleChange}
                    rows={9}
                    placeholder="Edit AI Generated Response"
                />
                <button onClick={handleSend} className='p-2 bg-orange-500 text-white mt-2'>
                    Send
                </button>

            </div>
        </div>
    );
};

export default EmailSingle;
