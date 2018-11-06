import axios from "axios"
import qs from "querystring"

import url from "./config"
import { getCookie } from "./cookies";

const httpGet = (path) => {
    return axios.get(url + path, {
        headers: {
            Authorization: "Bearer " + getCookie("token"),
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

const httpDelete = (path) => {
    return axios.delete(url + path, {
        headers: {
            'Authorization': "Bearer " + getCookie("token"),
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

const httpPost = (path, data) => {
    console.log(qs.stringify(data), data)
    return axios.post(url + path, qs.stringify(data), {
        headers: {
            'Authorization': "Bearer " + getCookie("token"),
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

const httpImage = (name,data) => {

    var formData = new FormData()
    formData.append("imageFile", data)

    return axios.post("https://localhost:8000/images?name="+name, formData, {
        headers: {
            'Authorization': "Bearer " + getCookie("token"),
            'Content-Type': 'multipart/form-data'
        }
    })
}

export {
    httpGet,
    httpPost,
    httpDelete,
    httpImage
}