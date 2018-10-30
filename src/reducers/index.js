import { combineReducers } from 'redux'

import { loader } from './loader'
import { main } from './main'

export default combineReducers({
    loader,
    main
})
