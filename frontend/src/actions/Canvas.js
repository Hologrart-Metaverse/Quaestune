import { fetchCanvas, changePixel } from "../api";

export const fetchCanvasPixels = (id) => async (dispatch) => {
    console.log("Action");
    console.log(id);
    try {
        const { data } = await api.fetchCanvas(id);
        dispatch({ type: "FETCH_CANVAS_PIXELS", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateCanvas = (canvas_id, rowNumber, columnNumber, newColor, whose) => async (dispatch) => {
    try {
        const { data } = await api.changePixel(canvas_id, rowNumber, columnNumber, newColor, whose);
        dispatch({ type: "CHANGEPIXEL", payload: data });
    } catch (error) {
        console.log(error);
    }
}