import React, { createContext, useState } from 'react';

export const NewApplicationDialogContext = createContext();

export const NewApplicationDialogProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    return (
        <NewApplicationDialogContext.Provider value={{ show, setShow }}>
            {children}
        </NewApplicationDialogContext.Provider>
    );
};
