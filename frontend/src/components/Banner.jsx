import React from 'react';
import BannerImage from "../assets/sahnexl-girisimler.jpeg";

const Banner = ({ images }) => {
  return (
    <div className='text-center banner-height mx-auto rounded-xl cursor-pointer border-2 shadow-sm hover:shadow-lg transition duration-300 hover:shadow-white/60 z-0'>
        <img src={BannerImage} className="object-cover w-full h-full rounded-xl z-0" />
        <div className='bg-gradient-to-r from-black/90 w-full banner-height absolute top-0 rounded-xl' />
    </div>
  )
}

export default Banner