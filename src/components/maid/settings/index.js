import React from 'react'

import Settings from './settings'

import { locality } from "../../../methods/config";

import user from "../../../images/user/user.png"
import { showSettings, showEditable, doneEditable } from '../../../actions/maid';

function conditional(show) {
    if (show === true)
        return (
            <Settings />
        )
}

function conditionalButtons(editable) {
    if (!editable) {
        return (
            <button className="w3-button w3-black" onClick={() => { showEditable() }} style={{ width: "80px", outline: "none" }}>Edit</button>
        )
    }
    else {
        return (
            <button className="w3-button w3-black" onClick={() => { doneEditable() }} style={{ width: "80px", outline: "none" }}>Save</button>
        )
    }
}

function renderOptions(editable) {
    if (editable) {
        return (
            <select className="w3-select w3-margin" style={{ outline: "none", width: "50%" }}>
                {
                    locality.map((v, i) => {
                        return (
                            <option key={i}>{v}</option>
                        )
                    })
                }
            </select>)
    }
}

export default function User(props) {
    var details = props.details
    return (
        <div className="w3-cell w3-mobile">
            <div className="w3-container w3-center">
                <img src={user} alt={"default"} className="w3-margin w3-circle" style={{ minWidth: "40px" }} />
            </div>
            <div className="w3-container w3-margin w3-padding w3-center">
                <div className="w3-small w3-center">Name <br /><span className="w3-xlarge" contentEditable={props.editable} style={{ outline: "none" }} spellcheck={false}><strong>{details.Name}</strong></span></div>
                <div className="w3-small w3-center">Phone<br /><span className="w3-xlarge" contentEditable={props.editable} style={{ outline: "none" }} spellcheck={false}><strong>{details.Phone}</strong></span></div>
                <div className="w3-small w3-center">Email<br style={{ width: "80px", outline: "none" }} /><span className="w3-xlarge" contentEditable={props.editable} style={{ outline: "none" }} spellcheck={false}><strong>{details.Email}</strong></span></div>
                <div className="w3-small w3-center">Pincode<br /><span className="w3-xlarge" style={{ outline: "none" }} spellcheck={false}><strong>{details.Pincode}</strong></span></div>
                {renderOptions(props.editable)}
                <div className="w3-margin w3-padding">
                    <button className="w3-button w3-black w3-margin" onClick={() => { showSettings() }}>Settings</button>
                    {conditionalButtons(props.editable)}
                </div>
            </div>
            {conditional(props.settings)}
        </div>
    )
}

