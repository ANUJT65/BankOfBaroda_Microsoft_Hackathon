import React, { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

const Namaste = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <div className='flex flex-col'>
        <div className='text-3xl ml-10 mt-3 '>Namaste, {user?.name} 🙏</div>
        <div className='text- ml-10 text-[#666666] '>Manage your applications, approvals and database with ease on a single integrated dashboard</div>
    </div>
  )
}

export default Namaste