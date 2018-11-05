const main = (state = {
    login : false,
    signup : true,
    loginDetails : {
        // EmailOrPhone : "9481315398",
        // Password : "abcde12345",
        // IsMaid : 1
        EmailOrPhone : "",
        Password : "",
        IsMaid : 0
    },
    success : true,
    msg : ""
}, action) => {
    var loginDetails 
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
        
        case "UPDATE_LOGIN_EMAIL_PH" : {
            loginDetails = {...state.loginDetails}
            loginDetails.EmailOrPhone = action.txt
            return { ...state, loginDetails}
        }

        case "UPDATE_LOGIN_PW" : {
            loginDetails = {...state.loginDetails}
            loginDetails.Password = action.txt
            return { ...state, loginDetails}
        }

        case "UPDATE_LOGIN_ISMAID" : {
            loginDetails = {...state.loginDetails}
            loginDetails.IsMaid = loginDetails.IsMaid === 0 ? 1 : 0
            return { ...state, loginDetails}
        }

        case "SET_SUCCESS" : {
            return { ...state, success : action.val}
        }

        case "SET_MSG" : {
            return { ...state, msg : action.msg}
        }

        case "RESET_LOGIN" : {
            loginDetails = {
                // EmailOrPhone : "9481315398",
                // Password : "abcde12345",
                // IsMaid : 1
                EmailOrPhone : "",
                Password : "",
                IsMaid : 0
            }
            return { ...state, loginDetails}
        }

        default : 
            return state
    }
}

export {
    main
}