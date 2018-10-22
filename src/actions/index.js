import store from '../stores'

const helper = ()=>{
    return store.dispatch({
        type : "HELPER"
    })
}

export {
    helper
}