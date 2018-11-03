import store from '../stores'
import * as loader from "./loader"

import setCookie from "../methods/cookies"
import { httpGet, httpPost } from "../methods/axios";

const showLogIn = () => {
    return store.dispatch({
        type: "SHOW_LOGIN"
    })
}

const closeLogIn = () => {
    return store.dispatch({
        type: "CLOSE_LOGIN"
    })
}

const showSignup = () => {
    return store.dispatch({
        type: "SHOW_SIGNUP"
    })
}

const closeSignup = () => {
    return store.dispatch({
        type: "CLOSE_SIGNUP"
    })
}

const updateLoginEmailOrPh = (e) => {
    return store.dispatch({
        type: "UPDATE_LOGIN_EMAIL_PH",
        txt: e.target.value
    })
}

const updateLoginPw = (e) => {
    return store.dispatch({
        type: "UPDATE_LOGIN_PW",
        txt: e.target.value
    })
}

const updateLoginIsMaid = () => {
    return store.dispatch({
        type: "UPDATE_LOGIN_ISMAID",
    })
}

const setSuccess = (val) => {
    return store.dispatch({
        type: "SET_SUCCESS",
        val
    })
}

const setMsg = (msg) => {
    return store.dispatch({
        type: "SET_MSG",
        msg
    })
}

const setMaid = () => {
    return store.dispatch({
        type: "SET_MAID"
    })
}

const setHirer = () => {
    return store.dispatch({
        type: "SET_HIRER"
    })
}

const setUA = () => {
    return store.dispatch({
        type: "SET_UA"
    })
}

const resetLogin = () => {
    return store.dispatch({
        type: "RESET_LOGIN"
    })
}

const auth = () => {
    httpGet("ismaid")
        .then(res => {
            if (res.data.success) {
                setMaid()
            }
            else {
                setHirer()
            }
            resetLogin()
            loader.unsetLoader()
        })
        .catch(err => {
            console.log("Something Went Wrong. Please Try Later")
        })
}

const loginAuth = () => {
    loader.setLoader()
    httpPost(store.getState().main.loginDetails)
        .then(res => {
            var jb = res.data
            if (!jb.success) {
                setSuccess(false)
                setMsg(jb.msg)
            }
            else {
                setSuccess(true)
                setMsg("")
                setCookie(jb.msg, 4)
                auth()
            }
        })
        .catch(err => {
            alert("Something went wrong")
            loader.unsetLoader()
        })
}

const userLogin = () => {
    store.dispatch(() => {
        loader.setLoader()
        loginAuth()
    })
}

export {
    showLogIn,
    closeLogIn,
    showSignup,
    closeSignup,
    updateLoginEmailOrPh,
    updateLoginPw,
    updateLoginIsMaid,
    userLogin,
    auth,
    setMaid,
    setHirer,
    setUA,
}