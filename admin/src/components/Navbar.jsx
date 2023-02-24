import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigation = useNavigate();
  return (
    <div className='w-screen flex justify-center items-center'>
        <div className='flex justify-center container mx-auto max-w-screen-lg my-10'>
            <button onClick={() => navigation("/create-canvas")} className='px-4 py-2 rounded-lg bg-purple-900 text-white shadow-lg mx-3 w-56'>Create Canvas</button>
            <button onClick={() => navigation("/create-blog")} className='px-4 py-2 rounded-lg bg-purple-900 text-white shadow-lg mx-3 w-56'>Create Blog</button>
            <button className='px-4 py-2 rounded-lg bg-purple-900 text-white shadow-lg mx-3 w-56'>All Canvases</button>
            <button className='px-4 py-2 rounded-lg bg-purple-900 text-white shadow-lg mx-3 w-56'>All Blogs</button>
            <button className='px-4 py-2 rounded-lg bg-purple-900 text-white shadow-lg mx-3 w-56'>All Users</button>
        </div>
    </div>
  )
}

export default Navbar