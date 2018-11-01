import store from '../stores'
import * as loader from "./loader"
import qs from "querystring"
import axios from "axios"
import setCookie, { getCookie } from "../methods/cookies"
import url from '../methods/config'

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

const userLogin = () => {
    store.dispatch(() => {
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
                axios.get(url + "ismaid", {
                    headers : {
                        Authorization : "Bearer " + getCookie("token")
                    }
                })
                .then(res => {
                    console.log(res.data)
                    if(res.data.success){
                        window.location.href = "/maid"
                        loader.unsetLoader()
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
            alert("Something went wrong")
            loader.unsetLoader()
        })
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
    userLogin
}