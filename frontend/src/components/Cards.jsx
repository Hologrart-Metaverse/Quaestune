import React from 'react';
import Logo from "../assets/TRASH/s.jpg";
import Logo1 from "../assets/TRASH/sampleImage.jpg";

const Card = ({ title, desc, img }) => {
    return(
        <div className='basis-1/2 flex justify-center'>
            <div className='bg-black cursor-pointer w-11/12 h-64 mx-4 my-4 border-2 rounded-lg hover:shadow-lg hover:shadow-white/30 text-center transition duration-300'>
                <img src={img} className="opacity-50 object-cover w-full h-full rounded-xl" />
            </div>
        </div>
    )
}

const Cards = () => {
  return (
    <div className='h-auto py-8 mx-auto z-0 flex justify-around flex-wrap'>
        <Card img={Logo} />
        <Card img={Logo1} />
        <Card img={Logo1} />
        <Card img={Logo} />
        <Card img={Logo1} />
        <Card img={Logo} />
        <Card img={Logo} />
        <Card img={Logo1} />
        <Card img={Logo} />
        <Card img={Logo} />
        <Card img={Logo} />
    </div>
  )
}

export default Cards