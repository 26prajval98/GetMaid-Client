import React from 'react'

import user from "../../../images/user/user.png"
import { done } from "../../../actions/hirer"

export default function Showservice(props) {
    return (
        <div>
            <div className="w3-col l4 m12 s12 w3-padding-large w3-center">
                <div className="w3-container w3-center">
                    <img src={`https://localhost:8000/images/${props.mid}.PNG?` + 1000000000 * Math.random()} onError={()=>{this.src= user}} alt={"default"} className="w3-margin w3-image w3-circle" width="100%" style={{ maxWidth: "200px", height : "200px" }} />
                </div>
                <div className="w3-container">
                    <span className="w3-padding-small w3-large" style={{ textAlign: "right" }}>Name : {props.Name}</span> <br />
                    <span className="w3-padding-small w3-large" style={{ textAlign: "right" }}>Phone : {props.Phone}</span> <br />
                    <span className="w3-padding-small w3-large" style={{ textAlign: "right" }}>Work : {props.work}</span> <br />
                    <button className="w3-button" onClick={() => { done(props.id) }}>Done</button>
                </div>
            </div>
        </div>
    )
}
