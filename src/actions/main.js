import store from '../stores'
import * as loader from "./loader"
import request from "request"

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

const updateLoginIsMaid = (e) => {
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
        console.log(store.getState().main.loginDetails)
        var options = {
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers:
            {
                'Postman-Token': '76cfd1b4-b966-4844-a2e9-91329bb148b0',
                'cache-control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: { answer: '42' }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var jb = JSON.parse(body)            
            if(!jb.success){
                setSuccess(false)
                setMsg(jb.msg)
            }
            loader.unsetLoader()
        });
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