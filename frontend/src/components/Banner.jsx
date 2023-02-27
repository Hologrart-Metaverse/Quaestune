import React from 'react';
import BannerImage from "../assets/MWC23-Kigen-banner.jpg";
import BannerImage1 from "../assets/sahnexl-girisimler.jpeg";

const Banner = ({ images }) => {
  return (
    <div className='text-center bg-black banner-height mx-auto rounded-xl cursor-pointer border-2 shadow-sm hover:shadow-lg transition duration-300 hover:shadow-white/60 z-0'>
        <img src={BannerImage} className=" opacity-40 object-cover w-full h-full rounded-xl z-0" />
        <div className='-mt-48 text-left ml-16 mr-16 z-20'>
          <h1 className='text-6xl mb-3 font-bold'>We will be at #MWC23</h1>
          <p>We are going to Barcelona as exhibitor to introduce our project to the world.</p>
        </div>
    </div>
  )
}

export default Banner