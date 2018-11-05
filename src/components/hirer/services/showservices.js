import React from 'react'

import user from "../../../images/user/user.png"
import {done} from "../../../actions/hirer"

export default function Showservice(props) {
    var imageURL = ""
    if (props.image === "")
        imageURL = user
    return (
        <div>
            <div className="w3-col l4 m12 12 w3-padding w3-center">
                <div className="w3-container">
                    <img src={imageURL} alt="Maid" className="w3-image" width="100%" style={{ maxWidth: "200px" }} />
                </div>
                <div className="w3-container">
                    <span className="w3-padding-small w3-large" style={{ textAlign: "right" }}>Name : {props.Name}</span> <br />
                    <span className="w3-padding-small w3-large" style={{ textAlign: "right" }}>Phone : {props.Phone}</span> <br />
                    <span className="w3-padding-small w3-large" style={{ textAlign: "right" }}>Work : {props.work}</span> <br />
                    <button className="w3-button" onClick={()=>{done(props.id)}}>Done</button>
                </div>
            </div>
        </div>
    )
}
