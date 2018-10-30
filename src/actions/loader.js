import store from '../stores'

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
    setLoader,
    unsetLoader
}