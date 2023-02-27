import React, { useState, useEffect } from 'react';

import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Navbar from '../components/Navbar';
import Register from '../components/Register';

import { useSelector, useDispatch } from 'react-redux';

import { getCanvases } from "../actions/Canvases";

const Home = () => {
  const register = useSelector((state) => state.register);
  const user = useSelector((state) => state.user);
  const canvases = useSelector((state) => state.canvases);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Home | Hologrart Metaverse";
    dispatch(getCanvases());
  }, [])
  
  useEffect(() => {console.log(canvases)}, [canvases])

  return (
    <div className='h-100 w-100 background-touch'>
        <Navbar />
        <div className='container max-w-screen-lg text-white mx-auto relative top-28 z-10'>
          <Banner />
          <Cards canvases={canvases} />
        </div>
        { user.length == 0 ? <Register /> : null}
        <div className='relative top-36'>
          <Footer />
        </div>
        {
          user.length == 0 ? (register == "show login" ? <Login /> : register == "show register" ? <SignUp /> : null) : null
        }
    </div>
  )
}

export default Home