import React, { useState } from 'react';
import FileBase from "react-file-base64";

const CreateBlog = () => {
    const [blog, setBlog] = useState({
        blogTitle: "",
        miniDesc: "",
        image: "",
        content: "",
    })
  return (
    <div className='w-screen flex justify-center items-center'>
        <div className='text-white flex flex-col w-3/5'>
            <input type="text" placeholder='Blog Title' className='p-2 bg-white text-black   my-2' />
            <input type="text" placeholder='Mini Description' className='p-2 bg-white text-black my-2' />
            <textarea type="text" placeholder='Content...' className='p-2 bg-white text-black my-2 h-96' />

            <FileBase 
              type="file"
              multiple={false}
              onDone={({base64}) => setBlog({ ...blog, image: base64 })}
            />

            <button className='mt-10 p-2 bg-purple-500 rounded-full' >Create</button>
        </div>
    </div>
  )
}

export default CreateBlog