import axios from "axios";

const server = axios.create({
    baseURL: "https://joint-nft-api.herokuapp.com",
    withCredentials: true,
});


// User
const createUserUrl = `/user/register`;
const loginUserUrl = `/user/login`;
const loginLocallyUrl = `/user/login-with-localstorage`;


// Canvases
const fetchCanvasesUrl = `/canvas/get`;


// Pixels
const fetchCanvasUrl = `/canvas/fetchCanvasPixels`;
const changePixelUrl = `/canvas/changeCanvas`;
const refreshCanvasUrl = `/canvas/refresh`;


export const createUser = (newUser) => server.post(createUserUrl, newUser);
export const loginUser = (user) => server.post(loginUserUrl, user);
export const loginLocally = (user) => server.post(loginLocallyUrl, user);


export const fetchCanvases = () => server.get(fetchCanvasesUrl);


export const fetchCanvas = (canvas_id) => server.post(fetchCanvasUrl, { id: canvas_id });
export const changePixel = (canvas_id, rowNumber, columnNumber, newColor, whose) => {
    return server.patch(changePixelUrl,
        {
            canvas_id: canvas_id,
            rowNumber: rowNumber,
            columnNumber: columnNumber,
            newColor: newColor,
            whose: whose
        }
    );
};