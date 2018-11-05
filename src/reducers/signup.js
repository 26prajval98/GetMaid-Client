import { locality, pincodes } from "../methods/config";

const signup = (state = {
    signup: {
        Phone: "",
        Name: "",
        Password: "",
        Repassword: "",
        Email: "",
        HouseNo: "",
        Locality: locality[0],
        PinCode: pincodes[0],
        IsMaid: 0
    },
    status: true,
    msg: ""
}, action) => {
    var signup
    var msg
    var success
    switch (action.type) {
        case "CHANGE_PHONE": {
            signup = {...state.signup}
            signup.Phone = action.Phone
            return { ...state, signup }
        }
        case "CHANGE_NAME": {
            signup = {...state.signup}
            signup.Name = action.Name
            return { ...state, signup }
        }
        case "CHANGE_PASSWORD": {
            signup = {...state.signup}
            signup.Password = action.Password
            return { ...state, signup }
        }
        case "CHANGE_REPASSWORD": {
            signup = {...state.signup}
            signup.Repassword = action.Repassword
            return { ...state, signup }
        }
        case "CHANGE_EMAIL": {
            signup = {...state.signup}
            signup.Email = action.Email
            return { ...state, signup }
        }
        case "CHANGE_HOUSE": {
            signup = {...state.signup}
            signup.HouseNo = action.HouseNo
            return { ...state, signup }
        }
        case "CHANGE_LOCALITY": {
            signup = {...state.signup}
            signup.Locality = locality[action.idx]
            signup.PinCode = pincodes[action.idx]
            return { ...state, signup }
        }
        case "CHANGE_MAID": {
            signup = {...state.signup}
            signup.IsMaid = signup.IsMaid === 0 ? 1 : 0
            return { ...state, signup }
        }

        case "SET_MSG" : {
            success = false
            msg = action.msg
            return { ...state, msg, success}
        }

        case "RESET_SIGNUP" : {
            signup = {
                Phone: "",
                Name: "",
                Password: "",
                Repassword: "",
                Email: "",
                HouseNo: "",
                Locality: locality[0],
                PinCode: pincodes[0],
                IsMaid: 0
            }
            return { ...state, signup}
        }

        default:
            return state
    }
}

export {
    signup
}