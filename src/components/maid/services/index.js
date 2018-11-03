import React from 'react'
import ShowService from './showservices'

var userServices = ["Something", "ajidasiyb"]
var Pending = [
    {
        location: "Somewhere",
        service : "Something"
    }
]

export default function Service() {
    return (
        <div className="w3-cell w3-cell-bottom w3-mobile">
            <div className="w3-card w3-margin w3-red" style={{ height: "250px", width: "80%", minWidth: "300px", overflowY: "auto" }}>
                <p className="w3-xxlarge w3-center">Services Pending</p>
                <ul>
                    {
                        Pending.map(val => {
                            return (
                                <li className="w3-large">Location: {val.location} <br />Service  : {val.service}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="w3-card-2 w3-margin w3-center" style={{ minHeight: "30%", width: "80%", minWidth: "300px" }}>
                <p className="w3-xlarge w3-text-blue">Services</p>
                <div className="w3-row" style={{ minWidth: "80%" }}>
                    {
                        userServices.map((val) => {
                            return <ShowService work={val} />
                        })
                    }
                </div>
                <div className="w3-container w3-center w3-padding">
                    <button className="w3-button w3-green w3-circle w3-margin w3-large" style={{ outline: "none" }}>+</button>
                    <span>Add</span>
                </div>
            </div>
        </div>
    )
}
