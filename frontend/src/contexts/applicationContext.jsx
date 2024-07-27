import React, {createContext, useState} from 'react'

export const applicationContext = createContext();

export const applicationProvider = ({children}) =>{
    const [application, setApplication] = useState(null);

    return(
        <applicationContext.Provider value={{application, setApplication}}>
            {children}
        </applicationContext.Provider>
    )
}