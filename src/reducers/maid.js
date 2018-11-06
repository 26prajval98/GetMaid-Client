import { locality, pincodes } from "../methods/config";
import { httpDelete, httpGet } from "../methods/axios";

const maid = (state = {
    details: {
        Name: "",
        Phone: "",
        Email: "",
        Pincode: ""
    },
    maidid : "",
    img: false,
    services: [],
    pending: [],
    online: true,
    earnings: 0,
    addService: "Cleaning",
    editable: false,
    addr: locality[0]
}, action) => {

    var online
    var addService
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
        case "GET_PENDING":
            var pending = action.pending
            return { ...state, pending }
        case "GET_ONLINE":
            online = true
            httpGet("maidonline")
            return { ...state, online }
        case "GET_EARNINGS":
            var earnings = action.earnings
            return { ...state, earnings }
        case "TOGGLE_ONLINE":
            online = !state.online
            if (online)
                httpGet("maidonline")
            else
                httpDelete("maidonline")
            return { ...state, online }
        case "SET_EDITABLE":
            editable = true
            details = { ...state.details }
            details.Pincode = pincodes[0]
            return { ...state, editable, details }
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
            addr = action.idx
            details = { ...state.details }
            console.log(locality.indexOf(action.idx))
            details.Pincode = pincodes[locality.indexOf(action.idx)]
            return { ...state, details, addr }
        case "SET_IMG":
            return { ...state, img : true}
        case "UNSET_IMG":
            return { ...state, img : false}
        case "GET_MAIDID":
            return { ...state, maidid : action.maidid}
        default:
            return { ...state }
    }
}

export {
    maid
}