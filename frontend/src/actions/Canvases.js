import { fetchCanvases } from "../api";

export const getCanvases = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCanvases();
        dispatch({ type: "FETCH_CANVASES", payload: data });
    } catch (error) {
        console.log(error);
    }
}