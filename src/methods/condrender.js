import React from "react"
import PageNotFound from "../components/notfound";
import { auth } from "../actions/main";

export default function (Component, props, path){

    auth()

    if(props.user === path){
        return(
            <Component dim={props.dim} />
        )
    }
    else{
        return(
            <PageNotFound />
        )
    }
}