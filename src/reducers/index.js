import { combineReducers } from 'redux'

import { loader } from './loader'
import { main } from './main'

const user = (state = {
    user : "UA"
}, action) => {
    switch (action.type) {
        case "SET_MAID": {
            return { ...state, user : "MAID"}
        }

        case "SET_HIRER": {
            return { ...state, user : "HIRER"}
        }

        case "SET_UA": {
            return { ...state, user : "UA"}
        }
        
        default : 
            return state
    }
}

export default combineReducers({
    loader,
    main,
    user
})
