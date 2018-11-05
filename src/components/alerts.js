import React from 'react'
import { deleteAlert } from "../actions/main"

export default function Alert(props) {

    var colour
    if (props.success) {
        colour = "green"
    }
    else {
        colour = "red"
    }

    return (
        <div className="w3-padding-large">
            <div className={`w3-${colour} w3-panel`}>
                <div className="w3-row">
                    <span className="w3-right w3-btn w3-hover-none w3-xxlarge" onClick={() => { deleteAlert(props.id) }}>&times;</span>
                    <p className="w3-large">
                        <strong>{props.msg}</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
