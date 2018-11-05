import store from '../stores'
import { locality } from '../methods/config';
import { setLoader, unsetLoader } from "./loader";
import { httpPost } from '../methods/axios';

const changePhone = (Phone) => {
    return store.dispatch({
        type: "CHANGE_PHONE",
        Phone
    })
}
const changeName = (Name) => {
    return store.dispatch({
        type: "CHANGE_NAME",
        Name
    })
}
const changePassword = (Password) => {
    return store.dispatch({
        type: "CHANGE_PASSWORD",
        Password
    })
}
const changeRepassword = (Repassword) => {
    return store.dispatch({
        type: "CHANGE_REPASSWORD",
        Repassword
    })
}
const changeEmail = (Email) => {
    return store.dispatch({
        type: "CHANGE_EMAIL",
        Email
    })
}
const changeHouse = (HouseNo) => {
    return store.dispatch({
        type: "CHANGE_HOUSE",
        HouseNo
    })
}
const changeLocality = (loc) => {
    var idx = locality.indexOf(loc)
    return store.dispatch({
        type: "CHANGE_LOCALITY",
        idx
    })
}

const changeMaid = ()=>{
    return store.dispatch({
        type : "CHANGE_MAID"
    })
}

const setMsg = (msg)=>{
    return store.dispatch({
        type : "SET_MSG",
        msg
    })
}

const signup = ()=>{
    setLoader()
    httpPost("signup", store.getState().signup.signup)
    .then(res => {
        if(!res.data.success){
            setMsg(res.data.msg)
        }
    })
    unsetLoader()
}
export {
    changePhone,
    changeName,
    changePassword,
    changeRepassword,
    changeEmail,
    changeHouse,
    changeLocality,
    changeMaid,
    signup   
}