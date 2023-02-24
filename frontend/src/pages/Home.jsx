import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Navbar from '../components/Navbar';
import Register from '../components/Register';

import { useSelector } from 'react-redux';

const Home = () => {
  const register = useSelector((state) => state.register);

  return (
    <div className='h-100 w-100 background-touch'>
        <Navbar />
        {/* <SubNav /> */}
        <div className='container max-w-screen-lg text-white mx-auto relative top-28 z-10'>
          <Banner />
          <Cards />
        </div>
        <Register />
        <div className='relative top-36'>
          <Footer />
        </div>
        {
          register == "show login" ? <Login /> : register == "show register" ? <SignUp /> : null
        }
        {/* <Login /> */}
        {/* <SignUp /> */}
    </div>
  )
}

export default Home