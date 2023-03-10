import React, { useEffect, useState } from 'react';
import { SketchPicker, HuePicker } from "react-color";
import { useSelector } from 'react-redux';

import DrawPanel from './DrawPanel';

const Editor = ({ canvas_id }) => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {setWidth(window.innerWidth)}, [window.innerWidth]);

    const canvasPixels = useSelector((state) => state.canvas_pixels);

    const [selectedColor, setSelectedColor] = useState("purple");
  return (
    <div className='fixed w-screen h-screen overflow-auto py-1/2 px-1/4 z-0'>
        {
            width > 500 ? 
            <SketchPicker className='fixed bottom-5 left-5' color={selectedColor} onChange={(color) => setSelectedColor(color.hex) } /> : 
            <HuePicker className='fixed inset-x-0 top-3/4 mx-auto' color={selectedColor} onChange={(color) => setSelectedColor(color.hex) } />
        }

        <div className='mt-10'>

        <DrawPanel pixels={canvasPixels} canvas_id={canvas_id} selectedColor={selectedColor} />
        </div>
    </div>
  )
}

export default Editor