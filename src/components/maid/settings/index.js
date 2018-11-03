import React from 'react'
import user from "../../../images/user/user.png"

export default function User() {
    return (
        <div className="w3-cell w3-mobile">
            <div className="w3-container w3-center">
                <img src={user} alt={"default"} className="w3-margin w3-circle" style={{ minWidth: "40px" }} />
            </div>
            <div className="w3-container w3-margin w3-padding w3-center">
                <div className="w3-xlarge">Name : Test</div>
                <div className="w3-xlarge">Phone : 616416164</div>
                <div className="w3-xlarge">Email : jsand@gmail.com</div>
                <div className="w3-xlarge">Pincode : 560079</div>
                <div className="w3-margin w3-padding">
                    <button className="w3-button w3-black">Settings</button>
                </div>
            </div>
        </div>
    )
}
