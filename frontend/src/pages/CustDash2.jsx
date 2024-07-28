import React from 'react';
import BankNavbar2 from '../components/BankNav2';
import Namaste from '../components/Namaste';
import CustDashGrid from '../components/CustDashGrid';
import { UserCategoryProvider } from '../contexts/UserCategoryContext';
import { NewApplicationDialogProvider } from '../contexts/NewApplicationDialogContext';


const CustDash2 = () => {
  return (
    <div className='flex flex-col bg-[#EFEFEF] h-full pb-3'>
        <BankNavbar2 />
        <Namaste />
        <UserCategoryProvider>
          <NewApplicationDialogProvider>
            <CustDashGrid />
          </NewApplicationDialogProvider>
        </UserCategoryProvider>
    </div>
  );
};

export default CustDash2;
