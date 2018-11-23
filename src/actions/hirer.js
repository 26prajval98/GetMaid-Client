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

// const getA

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
                    .then(()=>{
                        updateAll()
                    })
                    .catch((err)=> {
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
            console.log(r.data)
            if (r.data.success === undefined){
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

const getAll = (all) => {
    return store.dispatch({
        type: "GET_ALL",
        all
    })
}

const updateAll = () => {
    httpGet("all")
        .then((pending) => {
            getAll(pending.data)
        })
        .catch(err => {
            console.log("Something went wrong")
        })
}

const showAll = ()=>{
    return store.dispatch({
        type : "SHOW_ALL"
    })
}

const closeAll = ()=>{
    return store.dispatch({
        type : "CLOSE_ALL"
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

const done = (id)=>{
    httpGet("done?id="+id)
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
    searchService,
    updateAll,
    showAll,
    closeAll,
    done
}