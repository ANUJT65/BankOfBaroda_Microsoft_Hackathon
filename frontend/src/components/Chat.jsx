import React from 'react'
import Avatar from '@mui/material/Avatar';
import DialogCloud from './DialogCloud';
import ChatInput from './ChatInput';
import AttachedDocs from './AttachedDocs';

const Chat = () => {
    let ai_response='Here is the fetched data about Tata Motors from our internal database: Tata Motors Company Financial Summary Balance Sheet Overview. As of FY 2023 Total Assets: ₹3,45,000 Crores, Current Assets: ₹1,45,000 Crores Cash and Cash Equivalents: ₹20,000 Crores, Inventories: ₹50,000 Crores, Receivables: ₹30,000 Crores, Other Current Assets: ₹45,000 Crores, Non-Current Assets: ₹2,00,000 Crores, Property, Plant and Equipment: ₹1,20,000 Crores, Intangible Assets: ₹50,000 Crores, Investments: ₹20,000 Crores, Other Non-Current Assets: ₹10,000 Crores Total Liabilities: ₹2,40,000 Crores, Current Liabilities: ₹1,20,000 Crores,Short-term Debt: ₹40,000 Crores, Accounts Payable: ₹50,000 Crores, Other Current Liabilities: ₹30,000 Crores, Non-Current Liabilities: ₹1,20,000 Crores, Long-term Debt: ₹80,000 Crores, Deferred Tax Liabilities: ₹20,000 Crores';


  return (
    <div className='bg-black flex flex-col p-3'>
        <div className='text-white font-semibold text-3xl px-5'>Loan Fee Waiver </div>
        <hr className='border-t mt-4' />
    <div className='bg-black min-h-screen p-3 flex flex-col min-h-screen justify-end'>
        
        
        <div className='flex justify-end'>
            <DialogCloud text='fetch docs and info about account holder no 123456789 TATA MOTORS LTD'/>
            <Avatar sx={{ bgcolor: '#607196',  color: '#FFFFFF' }} className='mt-4 mr-5 font-black'>PG</Avatar>
        </div>
        <div className='flex justify-start'>
            <Avatar sx={{ bgcolor: '#607196',  color: '#FFFFFF' }} className='mt-4 ml-5 font-black'>A</Avatar>
            <DialogCloud text={ai_response}/>
        </div>
        <AttachedDocs />
        <ChatInput />
    </div>
    </div>
  )
}

export default Chat