const loader = (state = {
    isLoading : false
}, action) => {
    switch (action.type) {
        case "SET_LOADER": {
            return { ...state, isLoading : true}
        }

        case "UNSET_LOADER": {
            return { ...state, isLoading : false}
        }
        

        default : 
            return state
    }
}

export {
    loader
}