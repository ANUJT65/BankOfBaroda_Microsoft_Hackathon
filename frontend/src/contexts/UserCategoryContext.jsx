import React, { createContext, useState } from 'react';

export const UserCategoryContext = createContext();

export const UserCategoryProvider = ({ children }) => {
  const [userCategory, setUserCategory] = useState(null);

  return (
    <UserCategoryContext.Provider value={{ userCategory, setUserCategory }}>
      {children}
    </UserCategoryContext.Provider>
  );
};
