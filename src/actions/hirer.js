import store from '../stores'
import Axios from 'axios';
import { httpGet, httpPost } from '../methods/axios';
import { unsetLoader } from './loader';
import { deleteAll } from '../methods/cookies';
import { addAlert, setLoaded } from './main';

const getDetails = (details) => {
    return store.dispatch({
        type: "GET_DETAILS",
        details
    })
}

const logout = () => {
    deleteAll()
    window.location.href = "/"
}

const showEditable = () => {
    return store.dispatch({
        type: "SET_EDITABLE"
    })
}

const doneEditable = () => {
    return store.dispatch({
        type: "DONE_EDITABLE"
    })
}

const doneEditableAndSave = () => {
    doneEditable()
    var obj = { ...store.getState().hirer.details, addr: store.getState().hirer.addr }
    httpPost("details", obj)
}

const getAllHirer = () => {
    httpGet("/verify")
        .then(res => {
            if (res.data.secret) {
                deleteAll()
                alert("Please login to verify your account")
                window.location.href = "/"
            }
            else {
                Axios.all([httpGet("details")])
                    .then(Axios.spread((details) => {
                        getDetails(details.data)
                        unsetLoader()
                        setLoaded()
                    }))
                    .catch((err) => {
                        addAlert(false, "Something went wrong")
                        deleteAll()
                        unsetLoader()
                    })

            }
        })
}

const searchService = () => {
    httpGet("maidsearch?services=" + store.getState().hirer.searchService + "&pincode=" + store.getState().hirer.details.Pincode, {
    })
        .then(r => {
            if (r.data.success){
                addAlert(true, "Maids found. You will soon be updated")
            }
            else{
                addAlert(false, r.data.msg)
            }
        })
        .catch(err => {
            console.log("Something Went Wrong")
        })
}


const changeSearchService = (searchService) => {
    return store.dispatch({
        type: "CHANGE_SEARCH_SERVICE",
        searchService
    })
}

const changeName = (Name) => {
    return store.dispatch({
        type: "CHANGE_NAME",
        Name
    })
}
const changePhone = (Phone) => {
    return store.dispatch({
        type: "CHANGE_PHONE",
        Phone
    })
}

const changeEmail = (Email) => {
    return store.dispatch({
        type: "CHANGE_EMAIL",
        Email
    })
}

const changeAddr = (idx) => {
    return store.dispatch({
        type: "CHANGE_ADDRESS",
        idx
    })
}

const getPending = (pending) => {
    return store.dispatch({
        type: "GET_PENDING",
        pending
    })
}

const updatePending = () => {
    httpGet("pending")
        .then((pending) => {
            getPending(pending.data)
        })
        .catch(err => {
            console.log("Something went wrong")
        })
}

export {
    getDetails,
    showEditable,
    doneEditable,
    getAllHirer,
    changeSearchService,
    changeName,
    changePhone,
    changeEmail,
    changeAddr,
    doneEditableAndSave,
    updatePending,
    logout,
    searchService
}