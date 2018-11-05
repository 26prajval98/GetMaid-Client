import store from '../stores'
import { locality } from '../methods/config';
import { setLoader, unsetLoader } from "./loader";
import { httpPost } from '../methods/axios';
import { addAlert, closeSignup } from './main';

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

const resetSignup = ()=>{
    return store.dispatch({
        type : "RESET_SIGNUP"
    })
}

const signup = ()=>{
    setLoader()
    httpPost("signup", { ...store.getState().signup.signup, City : "Bengaluru"})
    .then(res => {
        console.log(res.data)
        if(!res.data.success){
            setMsg(res.data.msg)
        }
        if(res.data.success){
            addAlert(true, "Successfully Signed Up. Please Login to continue")
            resetSignup()
            closeSignup()
        }
        unsetLoader()
    })
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
