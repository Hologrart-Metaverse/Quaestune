export default (register = "", action) => {
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