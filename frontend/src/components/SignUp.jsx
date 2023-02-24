import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  return (
    <div className='w-screen h-screen bg-gray-800/80 fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center'>
        <CloseIcon onClick={() => {dispatch({ type: "CLOSE" }); navigation("/");}} className='cursor-pointer' style={{ color: "white", position: "absolute", top: 20, right: 20, fontSize: 50  }} />
        <div className='w-3/5 max-w-xl bg-white/80 rounded-2xl backdrop-blur-4xl px-10 py-5'>
            <h1 className='text-black w-full text-4xl font-bold mb-5'>Sign Up Quaestune</h1>
            <br />
            <div className='flex flex-col justify-center items-center'>
              <TextField
                id="outlined-required"
                label="Wallet ID"
                variant='filled'
                style={{ marginBottom: 10 }}
                className='w-full'
              />
              <TextField
                required
                id="outlined-required"
                label="Name"
                variant='filled'
                style={{ marginBottom: 10 }}
                className='w-full'
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                variant='filled'
                style={{ marginBottom: 10 }}
                className='w-full'
              />
              <TextField
                required
                id="outlined-required"
                label="Password"
                variant='filled'
                style={{ marginBottom: 20 }}
                className='w-full'
              />
              <br />
              <Button variant="contained" size="large" style={{ backgroundColor: "purple", marginBottom: 10 }}>
                Sign Up
              </Button>

            </div>
        </div>
    </div>
  )
}

export default SignUp