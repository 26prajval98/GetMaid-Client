import React from 'react'
import user from "../../../images/user/user.png"

export default function User(props) {
    var details = props.details
    return (    
        <div className="w3-cell w3-mobile">
            <div className="w3-container w3-center">
                <img src={user} alt={"default"} className="w3-margin w3-circle" style={{ minWidth: "40px" }} />
            </div>
            <div className="w3-container w3-margin w3-padding w3-center">
                <div className="w3-small w3-center">Name <br/><span className="w3-xlarge"><strong>{details.Name}</strong></span></div>
                <div className="w3-small w3-center">Phone<br/><span className="w3-xlarge"><strong>{details.Phone}</strong></span></div>
                <div className="w3-small w3-center">Email<br/><span className="w3-xlarge"><strong>{details.Email}</strong></span></div>
                <div className="w3-small w3-center">Pincode<br/><span className="w3-xlarge"><strong>{details.Pincode}</strong></span></div>
                <div className="w3-margin w3-padding">
                    <button className="w3-button w3-black">Settings</button>
                </div>
            </div>
        </div>
    )
}
