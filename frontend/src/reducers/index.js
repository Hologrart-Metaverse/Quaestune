import { combineReducers } from "redux";

import { register, size } from "./Register";
import canvas_pixels from "./CanvasPixels";
import canvases from "./Canvases";
import user from "./Users"

export default combineReducers({
    register,
    size,
    canvas_pixels,
    canvases,
    user,
});