import React, { createContext, useState } from 'react';

export const MailContext = createContext(); // Context name in PascalCase

export const EmailProvider = ({ children }) => { // Provider name in PascalCase
    const [singlemail, setEmail] = useState({
        senderName: 'Click on a mail to view here',
        urgency: '',
        time: '',
        title: '',
        preview: '',
        sentiment: '',
        email: '',
        application_id: ''
    });

    return (
        <MailContext.Provider value={{ singlemail, setEmail }}>
            {children}
        </MailContext.Provider>
    );
};
