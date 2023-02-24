import React from 'react';
import Footer from '../components/Footer';
import Products from '../components/MarketPage/Products';
import Search from '../components/MarketPage/Search';
import Navbar from '../components/Navbar';
import Register from '../components/Register';


// bg-white/50
const Market = () => {
  return (
    <div className='h-100 w-auto market-background'>
        <Navbar />
        <div className='pt-36 container mx-auto max-w-4xl'>
            <Search />
            <Products />
        </div>

        <Register />
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default Market