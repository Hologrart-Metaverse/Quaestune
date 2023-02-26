import { combineReducers } from "redux";
import { register, size } from "./Register";
import canvas_pixels from "./CanvasPixels";

export default combineReducers({
    register,
    canvas_pixels,
    size
});