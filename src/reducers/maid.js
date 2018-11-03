import { locality, pincodes } from "../methods/config";

const maid = (state = {
    details: {
        Name: "",
        Phone: "",
        Email: "",
        Pincode: ""
    },
    services: [],
    pending: [],
    online: false,
    earnings: 0,
    addService: "Cleaning",
    showSettings: false,
    editable: false,
    addr: locality[0]
}, action) => {

    var online
    var addService
    var showSettings
    var editable
    var details
    var addr
    switch (action.type) {
        case "GET_DETAILS":
            details = action.details
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
        case "SHOW_SETTINGS":
            showSettings = true
            return { ...state, showSettings }
        case "CLOSE_SETTINGS":
            showSettings = false
            return { ...state, showSettings }
        case "SET_EDITABLE":
            editable = true
            return { ...state, editable }
        case "DONE_EDITABLE":
            editable = false
            return { ...state, editable }
        case "CHANGE_ADD_SERVICE":
            addService = action.addService
            return { ...state, addService }
        case "CHANGE_NAME":
            details = { ...state.details }
            details.Name = action.Name
            return { ...state, details }
        case "CHANGE_PHONE":
            details = { ...state.details }
            details.Phone = action.Phone
            return { ...state, details }
        case "CHANGE_EMAIL":
            details = { ...state.details }
            details.Email = action.Email
            return { ...state, details }
        case "CHANGE_ADDRESS":
            addr = locality[action.idx]
            details = { ...state.details }
            details.Pincode = pincodes[action.idx]
            return { ...state, details, addr }

        default:
            return { ...state }
    }
}

export {
    maid
}