import store from '../stores'
import Axios from 'axios';
import { httpGet, httpDelete, httpPost } from '../methods/axios';
import { unsetLoader } from './loader';
import { deleteAll } from '../methods/cookies';

const getDetails = (details) => {
    console.log(details)
    return store.dispatch({
        type: "GET_DETAILS",
        details
    })
}

const getServices = (services) => {
    return store.dispatch({
        type: "GET_SERVICES",
        services
    })
}

const getOnline = (online) => {
    return store.dispatch({
        type: "GET_ONLINE",
        online
    })
}

const getEarnings = (earnings) => {
    return store.dispatch({
        type: "GET_EARNINGS",
        earnings
    })
}

const toggleOnline = () => {
    return store.dispatch({
        type: "TOGGLE_ONLINE",
    })
}

const getAllMaid = ()=>{
    Axios.all([httpGet("maidservices"), httpGet("details")])
    .then(Axios.spread((services, details)=>{
        console.log(services.data)
        getServices(services.data.services)
        getDetails(details.data)
        unsetLoader()
    }))
    .catch((err)=>{
        console.log("Something went wrong")
        deleteAll()
        window.location.href = "/"
    })
}


const changeAddService = (addService)=>{
    return store.dispatch({
        type : "CHANGE_ADD_SERVICE",
        addService
    })
}

const deleteService = (id)=>{
    httpDelete("maidservices?i="+id)
    .then( r => {
        getAllMaid()
    })
    .catch(err=>{
        console.log("Something Went Wrong")
    })
}

const addService = ()=>{
    httpPost("maidservices", {
        Service_name : store.getState().maid.addService
    })
    .then( r => {
        getAllMaid()
    })
    .catch(err=>{
        console.log("Something Went Wrong")
    })
}

export {
    getDetails,
    getServices,
    getOnline,
    getEarnings,
    toggleOnline,
    getAllMaid,
    deleteService,
    changeAddService,
    addService
}