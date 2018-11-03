import axios from "axios"
import qs from "querystring"

import url from "./config"
import { getCookie } from "./cookies";

const headers = {
    'Authorization': "Bearer " + getCookie("token"),
    'cache-control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded'
}

const httpGet = (path) => {
    console.log(getCookie("token"))
    return axios.get(url + path, {
        headers : {
            Authorization: "Bearer " + getCookie("token"),
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

const httpDelete = (path) => {
    return axios.delete(url + path, {
        headers
    })
}

const httpPost = (path, data) => {
    return axios.post(url + path, qs.stringify(data), {
        headers
    })
}

export {
    httpGet,
    httpPost,
    httpDelete
}