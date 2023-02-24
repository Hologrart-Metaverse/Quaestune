import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  
  return (
    <div className='fixed flex justify-center bottom-0 left-0 right-0 w-screen h-10 bg-purple-800/80 z-20 py-8'>
        <div className='flex justify-between items-center w-11/12 max-w-6xl text-white'>
            <p className='opacity-60'>Login or Sign up and Explore new NFT world...</p>
            <div className='flex justify-between'>
                <button onClick={() => {dispatch({ type: "SHOW_LOGIN" }); navigation("/login") }} className='px-5 py-2 border-2 border-white rounded-full mr-2 transition duration-300 hover:bg-white hover:text-purple-800'>Login</button>
                <button onClick={() => {dispatch({ type: "SHOW_SIGNUP" }); navigation("/sign-up") }} className='px-5 py-2 border-2 border-white rounded-full ml-2 transition duration-300 hover:bg-white hover:text-purple-800'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Register