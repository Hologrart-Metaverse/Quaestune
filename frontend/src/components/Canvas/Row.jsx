import React from 'react';
import Pixel from './Pixel';

const Row = ({ rowNumber, rowPixels, canvas_id, selectedColor, setBuyAlert }) => {
    let pixels = [];
    for (let i = 0; i < rowPixels.length; i++) {
      pixels.push(<Pixel key={i} columnNumber={i} color={rowPixels[i].color} whose={rowPixels.who} canvas_id={canvas_id} rowNumber={rowNumber} selectedColor={selectedColor} />);
        
    }
  return (
    <div className='flex w-fit'>
        {pixels}
    </div>
  )
}

export default Row