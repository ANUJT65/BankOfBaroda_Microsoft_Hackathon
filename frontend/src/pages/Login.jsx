import React, {useState} from 'react'
import backgroundImage from '../../public/bg-1.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [accno, setAcc] = useState("0");
  const [password, setPassword] = useState("0");

  function validateLogin() {
    if(accno=="123456789" && password=="cyberwardens123"){
      console.log("login success");
      navigate('/dashboard');
    }else{
      console.log("error")
    }
  }

  return (
    <div className='flex justify-start' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='relative text-6xl flex flex-col justify-start pt-20 text- font-bold text-center h-screen overflow-hidden w-full'>Welcome to the world of<br/>streamlined banking</div>
        <div className='w-full'>
            <div className=' mt-20 text-4xl text-center font-bold'>
                Login/Signup
            </div>
            <div className='flex flex-col justify-start p-10 bg-gray-100 bg-opacity-70 mt-12 mr-16 ml-16 rounded-md h-96'>
                <div className='text-xl text-center font-bold'>Enter your 12 digit account number</div>
                <input className='m-10 mb-5 h-12 p-5 rounded-md' value={accno} placeholder='Account No' onChange={(e) => setAcc(e.target.value)}></input>
                <div className='text-xl text-center font-bold'>Enter your password</div>
                <input className='m-10 mb-5 h-12 p-5 rounded-md' placeholder='Account No' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button className='mr-10 ml-10 rounded-md p-2 bg-[#ff5b2e] text-white font-bold' onClick={validateLogin}>Get Login</button>
                <a className='text-center mt-10' href='google.com'>I forgot my account number</a>
            </div>
        </div>
        </div>
  )
}

export default Login