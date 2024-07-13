import React from 'react'
import TableEntry from './TableEntry'
import EmailEntry from './EmailEntry'

const EmailsTable = () => {
    const emails=[
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
        {
            sender: 'Balaji Wafers Pvt Ltd',
            preview: 'Several unauthorized charges totaling Rs 1,200 were made on my c..',
            time: '9:15 AM',
            read: false
        },
        {
            sender: 'Smriti Mandanna',
            preview: 'I clicked on a phishing link and my account shows suspicious activit..',
            time: '7:30 AM',
            read: false
        }, 
        {
            sender: 'Mary Kom',
            preview: 'A loan was fraudulently taken out in my name; please investigate an..',
            time: '5:30 AM',
            read: false
        }, 
        {
            sender: 'LeBron James',
            preview: 'There are unauthorized transactions on my online banking account ple..',
            time: 'Jun 16',
            read: true
        }, 
        {
            sender: 'Aishwarya Ray',
            preview: 'An unauthorized withdrawal was made from my savings account af..',
            time: 'Jun 16',
            read: false
        }, 
        {
            sender: 'Chitale Bandhu LLC',
            preview: 'Pratham, my identity has been stolen and there are unauthorized tran..',
            time: 'Jun 15',
            read: true
        },
        {
            sender: 'Muhammed Shami',
            preview: 'An unauthorized INR 2,000 NEFT transfer was made from my accou..',
            time: 'Jun 14',
            read: false
        },
        {
            sender: 'Virat Kohli',
            preview: 'A fraudulent check for INR 850 was cashed from my account; pleas..',
            time: 'Jun 14',
            read: false
        },     
      ]
    
    
      return (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-left px-4 py-2">Sender</th>
              <th className="text-left px-4 py-2">Body</th>
              <th className="text-left px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody className=''>
            {emails.map((email, index)=>(
              <EmailEntry sender={email.sender} preview={email.preview} time={email.time} read={email.read}/>
            ))
            }
          </tbody>
        </table>
      )
}

export default EmailsTable