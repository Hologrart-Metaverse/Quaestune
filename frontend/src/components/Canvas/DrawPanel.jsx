import React from 'react';
import Row from './Row';

const DrawPanel = ({ pixels, canvas_id, selectedColor }) => {
    let rows = [];
    for (let i = 0; i < pixels.length; i++) {
        rows.push(<Row key={i} rowNumber={i} rowPixels={pixels[i]} canvas_id={canvas_id} selectedColor={selectedColor} />)
    }
  return (
    <div className='flex flex-col items-center'>
        <div className='mb-8'>
            {rows}
        </div>
    </div>
  )
}

export default DrawPanel