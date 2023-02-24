import React, { useState } from 'react';

const Search = () => {
    const [searching, setSearching] = useState("")
  return (
    <div className='flex justify-center items-center pb-20'>
        <input className='w-96 px-4 py-2 rounded-lg' placeholder='Searching NFTs' type="text" onChange={(e) => setSearching(e.target.value)} value={searching} />
    </div>
  )
}

export default Search