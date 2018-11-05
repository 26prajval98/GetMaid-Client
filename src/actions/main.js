import store from '../stores'
import * as loader from "./loader"

import setCookie, { getCookie } from "../methods/cookies"
import qs from "querystring"
import axios from "axios"
import url from "../methods/config"

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
    axios.get(url + "ismaid", {
        headers: {
            Authorization: "Bearer " + getCookie("token")
        }
    })
        .then(res => {
            if (res.data.success) {
                setMaid()
            }
            else {
                setHirer()
            }
            resetLogin()
            return
        })
        .catch(err => {
            console.log("Something Went Wrong. Please Try Later")
        })
}

const loginAuth = () => {
    loader.setLoader()
    axios.post(url + "login",
        qs.stringify(store.getState().main.loginDetails),
        {
            headers:
            {
                'cache-control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    )
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
            loader.unsetLoader()
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

const deleteAlert = (idx) => {
    store.dispatch({
        type: "DELETE_ALERT",
        idx
    })
}

const addAlert = (success, msg) => {
    var alert = { success, msg }
    store.dispatch({
        type: "ADD_ALERT",
        alert
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
    deleteAlert,
    addAlert
}