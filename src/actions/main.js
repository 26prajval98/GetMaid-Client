import store from '../stores'
import * as loader from "./loader"

import setCookie, { getCookie } from "../methods/cookies"
import qs from "querystring"
import axios from "axios"
import url from "../methods/config"
import { httpPost } from '../methods/axios';
import { logout } from './maid'

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
            loader.unsetLoader()
            resetLogin()
            if (res.data.success) {
                setMaid()
            }
            else {
                setHirer()
            }
            return
        })
        .catch(err => {
            console.log(err)
            alert("You are not allowed")
            window.location.href = "/"
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
            console.log(jb)
            if (!jb.success) {
                setSuccess(false)
                setMsg(jb.msg)
            }
            else if (jb.secret !== undefined) {
                setMsg("")
                setSuccess(true)
                setOtp()
                setSecret(jb.secret)
                setCookie(jb.msg, 4)
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

const setOtp = () => {
    store.dispatch({
        type: "SET_OTP"
    })
}

const changeOtp = (otp) => {
    store.dispatch({
        type: "CHANGE_OTP",
        otp
    })
}

const unsetOtp = () => {
    store.dispatch({
        type: "UNSET_OTP"
    })
}

const setSecret = (Secret) => {
    store.dispatch({
        type: "SET_SECRET",
        Secret
    })
}

const verifyOtp = () => {
    var otp = store.getState().main.otp
    var Secret = store.getState().main.Secret

    var data = { otp, Secret }

    httpPost("verify", data)
        .then(res => {
            var jr = res.data
            if (jr.success) {
                unsetOtp()
                setSecret("")
                setMsg("")
                auth()
            }
            else if (jr.msg === "OTP expired") {
                setMsg("")
                addAlert(false, "If token expired please login again")
                unsetOtp()
                logout()
            }
            else {
                setMsg(jr.msg)
            }
        })
}

const setLoaded = () => {
    store.dispatch({
        type: "SET_LOADED"
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
    addAlert,
    setOtp,
    unsetOtp,
    changeOtp,
    verifyOtp,
    setLoaded,
    setSuccess,
    setSecret
}