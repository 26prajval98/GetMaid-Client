import store from '../stores'

const helper = ()=>{
    return store.dispatch({
        type : "HELPER"
    })
}

const setLoader = ()=>{
    return store.dispatch({
        type : "SET_LOADER"
    })
}

const unsetLoader = ()=>{
    return store.dispatch({
        type : "UNSET_LOADER"
    })
}

export {
    helper,
    setLoader,
    unsetLoader
}