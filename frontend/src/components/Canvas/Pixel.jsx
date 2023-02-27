import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCanvas } from '../../actions/Canvas';

const Pixel = ({ columnNumber, color, whose, canvas_id, rowNumber, selectedColor }) => {
  var [pixelColor, setPixelColor] = useState(color);
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const dispatch = useDispatch();
  const size = useSelector((state) => state.size);
  const user = useSelector((state) => state.user);

  const applyColor = () => {
    dispatch(updateCanvas(canvas_id, rowNumber, columnNumber, pixelColor, user._id));
    setCanChangeColor(false);
  };

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  };


  return <div
    className=''
    onClick={applyColor}
    onMouseEnter={changeColorOnHover}
    onMouseLeave={resetColor}
    style={{ backgroundColor: pixelColor, width: size, height: size }}
  />;
}

export default Pixel