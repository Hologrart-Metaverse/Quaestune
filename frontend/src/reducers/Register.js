export const register = (register = "", action) => {
    switch (action.type){
        case "SHOW_LOGIN":
            return "show login";
            break;
        case "SHOW_SIGNUP":
            return "show register";
            break;
        case "CLOSE":
            return "";
            break;

        default: 
            return register;
            break;
    }
}


export const size = (size = 2, action) => {
    switch (action.type) {
        case "UP":
            return size + 1;
            break;
        case "DOWN":
            return size - 1;
            break;
        
        default:
            return size;
            break;
    }
}