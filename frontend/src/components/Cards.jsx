import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Card = ({ title, img, deadline, width, height, id }) => {
    const navigate = useNavigate();

    const date = deadline.split("T")[0].split("-");
    const dl = date[2] + " " + date[1] + " " + date[0];
    return(
        <div onClick={() => navigate(`/canvas/${id}`)} className='basis-1/2 flex justify-center'>
            <div className='bg-black cursor-pointer w-11/12 h-64 mx-4 my-4 border-2 rounded-lg hover:shadow-lg hover:shadow-white/30 text-center transition duration-300'>
                <img src={ img } className="opacity-40 object-cover w-full h-full rounded-xl z-30" />
                <div className="-mt-28 z-40 text-left ml-12 mr-12">
                    <h1 className='text-2xl font-bold'>{ title }</h1>
                    <p>{ dl }</p>
                </div>
                <div className='text-left -mt-40 ml-12'>{width} x {height}</div>
            </div>
        </div>
    )
}

const Cards = () => {
    const canvases = useSelector((state) => state.canvases);
  return (
    <div className='h-auto py-8 mx-auto z-0 flex justify-around flex-wrap'>
        {
            canvases != [] ? (
            canvases.map((canvas, index) => {
                return <Card key={index} img={canvas.image} title={canvas.canvasName} deadline={canvas.deadline} width={canvas.width} height={canvas.height} id={canvas._id} />
            }) ) : null
        }
    </div>
  )
}

export default Cards