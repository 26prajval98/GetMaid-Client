import React from 'react'
import Show from "./showservices"

export default function Service(props) {
    return (
        <div className="w3-container">
            <div className="w3-card w3-margin w3-red" style={{ height: "300px", width: "100%", minWidth: "200px", overflowY: "auto" }}>
                <p className="w3-xxlarge w3-center">Services Pending</p>
                <ul>
                    {
                        props.pending.map((val) => {
                            return (
                                <Show image="" Name={val.Name} Phone={val.Phone} work={val.work} key={val.sid} id={val.sid} mid={val.mid} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
