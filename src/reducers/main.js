const main = (state = {
    login: true,
    signup: false,
    alerts: [],
    loginDetails: {
        EmailOrPhone: "",
        Password: "",
        IsMaid: 0
    },
    phoneVerify: false,
    otp: "",
    Secret: "",
    success: true,
    msg: "",
    loaded: false,
}, action) => {
    var loginDetails
    var alerts
    switch (action.type) {
        case "SHOW_LOGIN": {
            return { ...state, login: true, signup: false }
        }

        case "CLOSE_LOGIN": {
            return { ...state, login: false, signup: false }
        }

        case "SHOW_SIGNUP": {
            return { ...state, login: false, signup: true }
        }

        case "CLOSE_SIGNUP": {
            return { ...state, login: false, signup: false }
        }

        case "UPDATE_LOGIN_EMAIL_PH": {
            loginDetails = { ...state.loginDetails }
            loginDetails.EmailOrPhone = action.txt
            return { ...state, loginDetails }
        }

        case "UPDATE_LOGIN_PW": {
            loginDetails = { ...state.loginDetails }
            loginDetails.Password = action.txt
            return { ...state, loginDetails }
        }

        case "UPDATE_LOGIN_ISMAID": {
            loginDetails = { ...state.loginDetails }
            loginDetails.IsMaid = loginDetails.IsMaid === 0 ? 1 : 0
            return { ...state, loginDetails }
        }

        case "SET_SUCCESS": {
            return { ...state, success: action.val }
        }

        case "SET_MSG": {
            return { ...state, msg: action.msg }
        }

        case "SET_OTP": {
            return { ...state, phoneVerify: true }
        }

        case "UNSET_OTP": {
            return { ...state, phoneVerify: false }
        }

        case "CHANGE_OTP": {
            var otp = action.otp
            return { ...state, otp }
        }

        case "SET_SECRET": {
            var Secret = action.Secret
            return { ...state, Secret }
        }

        case "RESET_LOGIN": {
            loginDetails = {
                EmailOrPhone: "",
                Password: "",
                IsMaid: 0
            }
            return { ...state, loginDetails }
        }

        case "ADD_ALERT": {
            alerts = [...state.alerts]
            alerts.push(action.alert)
            return { ...state, alerts }
        }

        case "DELETE_ALERT":
            alerts = [...state.alerts]
            alerts.splice(action.idx, 1)
            return { ...state, alerts }

        case "SET_LOADED":
            return { ...state, loaded: true }

        default:
            return state
    }
}

export {
    main
}