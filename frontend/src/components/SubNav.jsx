import React from 'react';

const Filter = ({ name }) => {
    return (
        <div className='bg-black/60 cursor-pointer px-5 py-1 rounded-full transition text-white/50 hover:bg-black mr-4'>
            {name}
        </div>
    )
}

const SubNav = () => {
  return (
    <div className='relative top-20 left-0 right-0 h-12 bg-black/20 z-20'>
        <div className='container mx-auto max-w-4xl overflow-auto h-full'>
            <div className='h-full flex items-center justify-center'>
                <Filter name="PixelArt" />
                <Filter name="VoxelArt" />
                <Filter name="Vectorel" />
                <Filter name="3D" />
                <Filter name="2D" />
                <Filter name="Voice" />
            </div>
        </div>
    </div>
  )
}

export default SubNav