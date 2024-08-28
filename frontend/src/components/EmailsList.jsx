import React, { useContext } from 'react';
import EmailCard from './EmailCard';
import { MailContext } from '../contexts/MailContext'; // Ensure this matches your file path and naming

const EmailsList = () => {
    const { singlemail, setEmail } = useContext(MailContext); 
    // Correct destructuring to match what is provided in the context
    //const { singlemail, setEmail } = useContext(emailContext);

    const emailData = [
        {
            senderName: 'Pratham Gadkari',
            urgency: 'Urgent',
            time: '3hr ago',
            title: 'Greetings and welcome!',
            preview: 'On behalf of the entire team at Bank of America, I would like to extend a heartfelt greeting to you.',
            sentiment: 'Good',
            email: 'prathamgadkari@gmail.com'
        },
        {
            senderName: 'John Doe',
            urgency: 'Low',
            time: '1hr ago',
            title: 'Meeting Reminder',
            preview: 'This is a gentle reminder for our upcoming meeting scheduled for tomorrow.',
            sentiment: 'Neutral',
            email: 'janedoe@gmail.com'
        },
        {
            senderName: 'Jane Smith',
            urgency: 'High',
            time: '5hr ago',
            title: 'Action Required: Account Verification',
            preview: 'Please verify your account details within the next 24 hours to avoid any disruptions.',
            sentiment: 'Alert',
            email: 'janesmith@gmail.com'
        },
        {
            senderName: 'Emily Johnson',
            urgency: 'Medium',
            time: '2hr ago',
            title: 'Your Invoice for July',
            preview: 'Attached is your invoice for the month of July. Please review the details and make the payment at your earliest convenience.',
            sentiment: 'Important',
            email: 'emilyjohnson@gmail.com'
        },
        {
            senderName: 'Michael Brown',
            urgency: 'Low',
            time: '30min ago',
            title: 'Team Outing Details',
            preview: 'Here are the details for our upcoming team outing. Looking forward to a fun day!',
            sentiment: 'Positive',
            email: 'michaelbrown@gmail.com'
        }
    ];

    return (
        <div className='flex flex-col py-4'>
            <div className='flex justify-between w-full px-4'>
                <input className='p-2 w-full' placeholder='Search Mail'></input>
                <button className='p-2 bg-black text-white'>Search</button>
            </div>
            <hr className='border-black mt-4'></hr>

            {emailData.map((email, index) => (
                <EmailCard
                    key={index}
                    senderName={email.senderName}
                    urgency={email.urgency}
                    time={email.time}
                    title={email.title}
                    preview={email.preview}
                    sentiment={email.sentiment}
                    email={email.email}
                />
            ))}
        </div>
    );
};

export default EmailsList;
