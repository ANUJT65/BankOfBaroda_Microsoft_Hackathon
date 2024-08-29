import React, { useContext } from 'react'
import EmailChat from './EmailChat'
import EmailReply from './EmailReply'
import { MailContext } from '../contexts/MailContext'; // Ensure this matches your file path and naming


const EmailSingle = () => {
    //const { email, setEmail } = useContext(emailContext);
    const { singlemail, setEmail } = useContext(MailContext); 
    console.log(singlemail.application_id);
    const mail_content = singlemail.content; //anuj idhar se tere AI me daal de

  return (
    <div className='p-6 flex flex-col'>
        <div className='text-2xl font-bold'>{singlemail.senderName}</div>
        <div className=''>{singlemail.email}</div>
        <div className='flex justify-center mt-4 text-orange-500 font-bold italic'>{singlemail.title}</div>
        <hr  className='border-black mt-2'/>
        <div className='flex justify-between mt-4'>
            <div className='flex flex-col'>
                <div className='font-bold'>Application Id</div>
                <div>{singlemail.application_id}</div>
            </div>
        </div>
        <EmailChat />
        <EmailReply />

        <div className='flex justify-between w-full px-4'>
        <input className='border border-gray-600  p-2 flex flex-col w-full' defaultValue="AI Generated response ready to be edited">
        
        </input>
            <button className='p-2 bg-orange-500 text-white'>Send</button>
        </div>
        
    </div>

  )
}

export default EmailSingle