import React from 'react';


const DiscordButton = () => {
  return (
    <a target="_blank" href="https://discord.gg/nDRs2GUK" className='text-white font-bold text-lg px-12 py-8 mt-4 rounded-md bg-purple-600 hover:shadow-lg hover:shadow-white/40 transition cursor-pointer text-center'>
      Join Discord Server!
    </a>
  )
}

const Copyright = () => {
  return (
    <div className='flex justify-start text-white/70 mt-8'>
      @Copyright | All rights are Reserved
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-white/25 py-12 px-24'>
      <div className='container mx-auto flex flex-wrap-reverse'>
        <div className='basis-1/2'>
          <div className='flex justify-start mb-4'>
            <img src="" alt="" />
            <h2 className='text-xl font-bold text-white'>Hologrart Metaverse</h2>
          </div>
          <p className='text-white text-sm max-w-lg'>Holgrart is developed with Web3 infrastructure and blockchain for the metaverse; It focuses on business process solutions using blockchain-based finance in culture, arts, entertainment NFT-focused and some strategic sectors.</p>
          <Copyright />
        </div>
        <div className='basis1/2 flex flex-col'>
          <h1 className='font-bold text-white text-2xl basis-1'>Join Discord Community!</h1>
          <DiscordButton />
        </div>
      </div>
    </div>

  )
}

export default Footer