import React, { useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Editor from '../components/Canvas/Editor';
import { fetchCanvasPixels } from "../actions/Canvas";

const Back = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    return (
        <div onClick={() => {navigation("/"); dispatch({ type: "EXIT" });}} className='flex justify-center items-center w-12 h-12 rounded-full bg-white fixed top-10 left-10 cursor-pointer shadow-xl shadow-black hover:shadow-4xl z-50'>
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
                <Button onClick={() => { size <= 20 ? dispatch({ type: "UP" }) : null }} key="increase"><AddIcon /></Button>
                <Button onClick={() => { size > 0 ? dispatch({ type: "DOWN" }) : null }} key="decrease"><RemoveIcon /></Button>
            </ButtonGroup>
        </div>
    )
}

const Generation = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const canvas_id = location.pathname.split("/")[2];

    document.title =
      `${location.pathname.split("/")[2]?.replaceAll("%20", " ")} | Joint NFT Generation`;

    dispatch(fetchCanvasPixels(canvas_id));

  return (
    <div>
        <Editor canvas_id={canvas_id} />
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