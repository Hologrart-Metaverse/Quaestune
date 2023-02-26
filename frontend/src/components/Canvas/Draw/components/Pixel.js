import React, { useState } from 'react';
import "../styles/pixel.scss";

import { useDispatch, useSelector } from 'react-redux';
import { updateCanvas } from '../../../actions/Canvas';

const Pixel = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const { columnNumber, color, whose, canvas_id, rowNumber, selectedColor, setBuyAlert } = props;

  var [pixelColor, setPixelColor] = useState(color);
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  // setInterval(() => {
  //   setPixelColor(color);
  // }, 2000)

  const applyColor = () => {
    // setPixelColor(selectedColor);
    dispatch(updateCanvas(canvas_id, rowNumber, columnNumber, pixelColor, user._id));
    setCanChangeColor(false);
    alert("Tebrikler, sen de SahneXL'ın tamamlanmasına destek olarak Yeni Nesil NFT üretiminde yerini aldın 🚀");
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
    className="pixel"
    onClick={applyColor}
    onMouseEnter={changeColorOnHover}
    onMouseLeave={resetColor}
    style={{ backgroundColor: pixelColor }}
  />;
};

export default Pixel;