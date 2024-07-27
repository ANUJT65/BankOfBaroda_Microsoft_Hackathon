import React, {createContext, useState} from 'react';

export const categoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [category, setCategory] = useState('Applications')

    return(
        <categoryContext.Provider value={{category, setCategory}}>
            {children}
        </categoryContext.Provider>
    )
}