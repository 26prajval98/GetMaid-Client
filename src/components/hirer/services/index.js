import React from 'react'
import Show from "./showservices"

var pending = [1]

export default function Service(props) {
    return (
        <div className="w3-container">
            <div className="w3-card w3-margin w3-red" style={{ height: "300px", width: "100%", minWidth: "200px", overflowY: "auto" }}>
                <p className="w3-xxlarge w3-center">Services Pending</p>
                <ul>
                    {
                        pending.map((val, i) => {
                            return (
                                <Show image="" Name="ashda" Phone="ajhvdgajs" work="absv" />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
