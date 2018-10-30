import store from '../stores'

const showLogIn = ()=>{
    return store.dispatch({
        type : "SHOW_LOGIN"
    })
}

const closeLogIn = ()=>{
    return store.dispatch({
        type : "CLOSE_LOGIN"
    })
}

const showSignup = ()=>{
    return store.dispatch({
        type : "SHOW_SIGNUP"
    })
}

const closeSignup = ()=>{
    return store.dispatch({
        type : "CLOSE_SIGNUP"
    })
}

const updateLoginEmailOrPh = (e)=>{
    return store.dispatch({
        type : "UPDATE_LOGIN_EMAIL_PH",
        txt : e.target.value
    })
}

const updateLoginPw = (e)=>{
    return store.dispatch({
        type : "UPDATE_LOGIN_PW",
        txt : e.target.value
    })
}

const updateLoginIsMaid = (e)=>{
    return store.dispatch({
        type : "UPDATE_LOGIN_ISMAID",
    })
}

export {
    showLogIn,
    closeLogIn,
    showSignup,
    closeSignup,
    updateLoginEmailOrPh,
    updateLoginPw,
    updateLoginIsMaid
}