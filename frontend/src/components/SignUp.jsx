import React, { useState, useEffect } from 'react';

import { TextField, Button, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createUser } from "../actions/Users";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [newUser, setNewUser] = useState({
    wallet: "",
    fullName: "",
    email: "",
    password: ""
  });

  const [canPress, setCanPress] = useState(false);


  useEffect(() => {
    if (newUser.fullName == "" || newUser.email == "" || newUser.password == "") {
      setCanPress(false);
    }
    else if (newUser.password.length < 8) {
      setCanPress(false);
    }
    else if (newUser.email.split("@").length != 2 || newUser.email.slice(-4) != ".com") {
      setCanPress(false);
    }
    else if (newUser.fullName.split(" ").length < 2) {
      setCanPress(false);
    }
    else{
      setCanPress(true);
    }
  }, [newUser])
  


  return (
    <div className='w-screen h-screen bg-gray-800/80 fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center'>
        <CloseIcon onClick={() => {dispatch({ type: "CLOSE" }); navigation("/");}} className='cursor-pointer' style={{ color: "white", position: "absolute", top: 20, right: 20, fontSize: 50  }} />
        <div className='w-3/5 max-w-xl bg-white/80 rounded-2xl backdrop-blur-4xl px-10 py-5'>
            <h1 className='text-black w-full text-4xl font-bold mb-5'>Sign Up Hologrart</h1>
            <br />
            <div className='flex flex-col justify-center items-center'>
              <TextField
                id="outlined-required"
                label="Wallet ID"
                variant='filled'
                style={{ marginBottom: 10 }}
                className='w-full'
                value={newUser.wallet}
                onChange={e => setNewUser({...newUser, wallet: e.target.value})}
              />
              <TextField
                required
                id="outlined-required"
                label="Name"
                variant='filled'
                style={{ marginBottom: 10 }}
                className='w-full'
                value={newUser.fullName}
                onChange={e => setNewUser({...newUser, fullName: e.target.value})}
              />
              <TextField
                type="email"
                required
                id="outlined-required"
                label="Email"
                variant='filled'
                style={{ marginBottom: 10 }}
                className='w-full'
                value={newUser.email}
                onChange={e => setNewUser({...newUser, email: e.target.value})}
              />
              <TextField
                type="password"
                required
                id="outlined-required"
                label="Password"
                variant='filled'
                style={{ marginBottom: 20 }}
                className='w-full'
                value={newUser.password}
                onChange={e => setNewUser({...newUser, password: e.target.value})}
              />
              <br />
              <Button onClick={(newUser) => canPress ? dispatch(createUser(newUser)) : alert("Fill the all fields")} variant="contained" size="large" style={{ backgroundColor: `${canPress ? "purple" : "gray"}`, marginBottom: 10 }}>
                Sign Up
              </Button>



            </div>
        </div>
    </div>
  )
}

export default SignUp