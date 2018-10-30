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

export {
    showLogIn,
    closeLogIn,
    showSignup,
    closeSignup    
}