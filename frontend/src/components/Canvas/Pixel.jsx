import React from 'react';
import { useDispatch } from 'react-redux';

const Pixel = ({ columnNumber, color, whose, canvas_id, rowNumber, selectedColor, setBuyAlert }) => {
  var [pixelColor, setPixelColor] = useState(color);
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const dispatch = useDispatch();

  const applyColor = () => {
    // setPixelColor(selectedColor);
    dispatch(updateCanvas(canvas_id, rowNumber, columnNumber, pixelColor, user._id));
    setCanChangeColor(false);
  };

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
    setBuyAlert(true);
  };

  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
    setBuyAlert(false);
  };


  return <div
    className=""
    onClick={applyColor}
    onMouseEnter={changeColorOnHover}
    onMouseLeave={resetColor}
    style={{ backgroundColor: pixelColor }}
  />;
}

export default Pixel