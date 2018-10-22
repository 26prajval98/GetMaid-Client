const helper = (state = {
    numbers: [1, 2, 3],
}, action) => {
    switch (action.type) {
        case "HELPER": {
            var t = [ ...state.numbers, parseInt(Math.random()*10, 10)]
            return { ...state, numbers : t}
        }

        default : 
            return state
    }
}

export default helper