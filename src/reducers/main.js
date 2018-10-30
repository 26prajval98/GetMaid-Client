const main = (state = {
    login : false,
    signup : false
}, action) => {
    switch (action.type) {
        case "SHOW_LOGIN": {
            return { ...state, login : true, signup : false}
        }

        case "CLOSE_LOGIN": {
            return { ...state, login : false, signup : false}
        }

        case "SHOW_SIGNUP": {
            return { ...state, login : false, signup : true}
        }

        case "CLOSE_SIGNUP": {
            return { ...state, login : false, signup : false}
        }
        
        default : 
            return state
    }
}

export {
    main
}