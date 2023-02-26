import React from 'react';
import Logo from "../assets/TRASH/s.jpg";
import Logo1 from "../assets/TRASH/sampleImage.jpg";

const Card = ({ title, desc, img }) => {
    return(
        <div className='basis-1/2 flex justify-center'>
            <div className='bg-black cursor-pointer w-11/12 h-64 mx-4 my-4 border-2 rounded-lg hover:shadow-lg hover:shadow-white/30 text-center transition duration-300'>
                <img src={img} className="opacity-50 object-cover w-full h-full rounded-xl z-30" />
                <div className="-mt-28 z-40 text-left ml-12 mr-12">
                    <h1 className='text-2xl font-bold'>{ title }</h1>
                    <p>{ desc }</p>
                </div>
                <div className='text-left -mt-48 ml-12'>32 x 32</div>
            </div>
        </div>
    )
}

const Cards = () => {
  return (
    <div className='h-auto py-8 mx-auto z-0 flex justify-around flex-wrap'>
        <Card title={"Mona Lisa"} desc={"Fugiat id eu proident ex cillum veniam amet Lorem et qui aliqua pariatur."} img={Logo} />
        <Card title={"Barcelona"} desc={"Excepteur velit non veniam velit officia do excepteur deserunt Lorem eu."} img={Logo1} />
        <Card title={"SahneXL"} desc={"Veniam velit quis est excepteur culpa culpa pariatur velit."} img={Logo1} />
        <Card title={"Mona Lisa"} desc={"Aliquip sunt nostrud proident ad exercitation nisi fugiat veniam cillum do."} img={Logo} />
        <Card title={"Mona Lisa"} desc={"Sunt cupidatat enim sit ad."} img={Logo1} />
        <Card title={"Mona Lisa"} desc={"Nulla cillum magna laborum deserunt mollit elit non."} img={Logo} />
        <Card title={"Mona Lisa"} desc={"Magna consectetur amet dolor cillum excepteur velit est deserunt aliqua laboris duis nulla."} img={Logo} />
        <Card title={"Mona Lisa"} desc={"Lorem aliquip magna dolore enim."} img={Logo1} />
        <Card title={"Mona Lisa"} desc={"Ut qui nulla elit mollit eu qui aliqua veniam."} img={Logo} />
        <Card title={"Mona Lisa"} desc={"Exercitation in deserunt qui minim nostrud deserunt aliqua et excepteur ea ad."} img={Logo} />
        <Card title={"Mona Lisa"} desc={"Anim aliquip mollit voluptate aliquip quis aliquip mollit ullamco consequat enim."} img={Logo} />
    </div>
  )
}

export default Cards