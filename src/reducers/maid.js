const maid = (state = {
    details: {
        Name: "ProP",
        Phone: "9449642887",
        Email: "abcd@gmail.com",
        Pincode: "560079"
    },
    services: [],
    pending: [],
    online: false,
    earnings: 0,
    addService : "Cleaning"
}, action ) => {

    var online
    var addService
    switch (action.type) {
        case "GET_DETAILS":
            var details = action.details
            return { ...state, details }
        case "GET_SERVICES":
            var services = action.services
            return { ...state, services }
        case "GET_ONLINE":
            online = action.online
            return { ...state, online }
        case "GET_EARNINGS":
            var earnings = action.earnings
            return { ...state, earnings }
        case "TOGGLE_ONLINE":
            online = !state.online
            return { ...state, online }
        case "CHANGE_ADD_SERVICE":
            addService = action.addService
            return { ...state, addService}
        default:
            return { ...state }
    }
}

export {
    maid
}