import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// import Editor from '../components/Canvas/Draw/components/Editor';
import { useSelector, useDispatch } from 'react-redux';
import Editor from '../components/Canvas/Editor';

const Back = () => {
    const navigation = useNavigate();
    return (
        <div onClick={() => navigation("/")} className='flex justify-center items-center w-12 h-12 rounded-full bg-white fixed top-10 left-10 cursor-pointer shadow-xl shadow-black hover:shadow-4xl z-50'>
            <ArrowBackIcon style={{ color: "black" }} />
        </div>
    )
}

const Buttons = () => {
    const size = useSelector((state) => state.size);
    const dispatch = useDispatch();

    return (
        <div className='fixed top-10 right-10 z-50'>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
                <Button onClick={() => { size <= 15 ? dispatch({ type: "UP" }) : null }} key="increase"><AddIcon /></Button>
                <Button onClick={() => { size > 0 ? dispatch({ type: "DOWN" }) : null }} key="decrease"><RemoveIcon /></Button>
            </ButtonGroup>
        </div>
    )
}

const Generation = () => {
    const canvasPixels = useSelector((state) => state.canvas_pixels);
  return (
    <div>
        <Editor />
        <Back />
        <Buttons />
        {/* <div> */}
            {/* { canvasPixels && (
                <Editor 
                    canvasPixels={canvasPixels}
                    canvas_id={canvas_id}
                />
            ) } */}
        {/* </div> */}
    </div>
  )
}

export default Generation