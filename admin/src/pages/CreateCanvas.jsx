import React, { useState } from 'react';
import FileBase from "react-file-base64";

const CreateCanvas = () => {

    const [newCanvas, setNewCanvas] = useState({
        canvasName: "",
        width: 32,
        height: 32,
        image: "",
        pixels: []
    });


  return (
    <div className='w-screen flex justify-center items-center'>
        <div className='text-white flex flex-col'>
            <input type="text" placeholder='Canvas Name' className='p-2 bg-white text-black   my-2' />
            <input type="number" placeholder='Width' className='p-2 bg-white text-black my-2' />
            <input type="number" placeholder='Height' className='p-2 bg-white text-black my-2' />

            <FileBase 
              type="file"
              multiple={false}
              onDone={({base64}) => setNewCanvas({ ...newCanvas, image: base64 })}
            />

            <button className='mt-10 p-2 bg-purple-500 rounded-full' >Submit</button>
        </div>
    </div>
  )
}

export default CreateCanvas