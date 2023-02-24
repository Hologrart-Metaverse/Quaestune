import React, { useState } from 'react';
import Logo from "../assets/hologrartLogo1.png";
import { useLocation, useNavigate } from "react-router-dom";




const Dropdown = () => {
  return (
    <div className='flex flex-col fixed mt-32 ml-40 rounded-xl border-2 text-gray-300'>
      <div className='text-center hover:bg-black/60 px-8 py-2 bg-black/40 cursor-pointer border-y-2 border-purple-300/20 rounded-t-xl'>Hologrart Metaverse</div>
      <div className='text-center hover:bg-black/60 px-8 py-2 bg-black/40 cursor-pointer border-y-2 border-purple-300/20 rounded-b-xl'>Art-Exhibition</div>
      {/* <div className='text-center hover:bg-black/60 px-8 py-2 bg-black/40 cursor-pointer border-y-2 border-purple-300/20'>Main</div>
      <div className='text-center hover:bg-black/60 px-8 py-2 bg-black/40 cursor-pointer border-y-2 border-purple-300/20 rounded-b-xl'>Hologrart</div> */}
    </div>
  )
}


const Navbar = () => {
  const [user, setUser] = useState(false);
  const [menu, setMenu] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);


  return (
    <div className='fixed top-0 left-0 right-0 h-20 backdrop-blur-2xl bg-white/20 border-b-2 border-b-purple-500 shadow-lg shadow-indigo-500/40 z-30'>
        <div className='mx-auto h-full flex justify-around items-center'>
            <div className='basis-1/4 flex items-center'>
              <img src={Logo} className='w-24 h-24 ml-16 mt-12 cursor-pointer' onClick={() => setMenu(!menu)} alt='Hologrart Logo'/>
              {/* {menu ? <Dropdown /> : null} */}
            </div>
            <h1 className='basis-1/2 text-4xl text-center nav-title cursor-pointer text-slate-200 hover:text-white transition'>Quaestune</h1>
            <div className='basis-1/4 flex mr-10 justify-end'>
              <h2 onClick={() => navigate("/")} className={`ml-5 px-4 text-center py-2 rounded-xl transition cursor-pointer text-white hover:bg-white/25`}>Home</h2>
              <h2 onClick={() => navigate("/market")} className={`ml-5 px-4 text-center py-2 rounded-xl transition cursor-pointer text-white hover:bg-white/25`}>Market</h2>
              {
                user ? (
                  <div className={`ml-5 text-center py-2 flex items-center mx-2`}>
                    <img src={Logo} alt="profile" className={`rounded-full cursor-pointer w-14 hover:bg-white/25`} />
                  </div>
                ) : (
                  <>
                    <h2 className={`text-white ml-5 px-4 text-center py-2 rounded-xl transition cursor-pointer bg-purple-600 hover:bg-purple-500`}>Connect Wallet</h2>
                  </>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Navbar