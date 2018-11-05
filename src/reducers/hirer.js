import { locality, pincodes } from "../methods/config";

const hirer = (state = {
    details: {
        Name: "",
        Phone: "",
        Email: "",
        Pincode: "",
        House: ""
    },
    pending: [],
    searchService: "Cleaning",
    editable: false,
    addr: locality[0]
}, action) => {

    var searchService
    var editable
    var details
    var addr
    switch (action.type) {
        case "GET_DETAILS":
            details = action.details
            return { ...state, details }
        case "GET_PENDING":
            var pending = action.pending
            return { ...state, pending }
        case "SET_EDITABLE":
            editable = true
            details = { ...state.details }
            details.Pincode = pincodes[0]
            return { ...state, editable, details }
        case "DONE_EDITABLE":
            editable = false
            return { ...state, editable }
        case "CHANGE_SEARCH_SERVICE":
            searchService = action.searchService
            return { ...state, searchService }
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
        case "CHANGE_HOUSE":
            details = { ...state.details }
            details.House = action.House
            return { ...state, details }
        case "CHANGE_ADDRESS":
            addr = action.idx
            details = { ...state.details }
            console.log(locality.indexOf(action.idx))
            details.Pincode = pincodes[locality.indexOf(action.idx)]
            return { ...state, details, addr }

        default:
            return { ...state }
    }
}

export {
    hirer
}