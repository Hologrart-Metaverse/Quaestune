import React from 'react';


const Card = () => {
    return(
        <div className='basis-1/4 flex justify-center'>
            <div className='w-full mx-3 my-4 border-2 px-12 py-28 rounded-lg hover:shadow-lg hover:shadow-white/30 text-center'>
                Card
            </div>
        </div>
    )
}


const Products = () => {
  return (
    <div className='flex justify-start flex-wrap mb-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Products