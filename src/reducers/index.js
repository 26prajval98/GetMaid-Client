import { combineReducers } from 'redux'

import { loader } from './loader'
import { main } from './main'
import { maid } from './maid'
import { signup } from './signup'

const client = (state = {
    user: "UA",
    dim: {
        h: window.innerHeight,
        w: window.innerWidth
    }
}, action) => {
    switch (action.type) {
        case "SET_MAID": {
            return { ...state, user: "MAID" }
        }

        case "SET_HIRER": {
            return { ...state, user: "HIRER" }
        }

        case "SET_UA": {
            return { ...state, user: "UA" }
        }

        case "UPDATE_DIM": {
            return {
                ...state, dim: {
                    h: window.innerHeight,
                    w: window.innerWidth
                }
            }
        }

        default:
            return state
    }
}

export default combineReducers({
    loader,
    main,
    client,
    maid,
    signup
})
