import React from 'react'

import { locality } from "../../../methods/config";
import Imageupload from "../../image"

import user from "../../../images/user/user.png"
import { showEditable, doneEditableAndSave, changeName, changePhone, changeEmail, changeAddr, logout, showImageUpload, closeImageUpload } from '../../../actions/maid';

// function conditional(show) {
//     if (show === true)
//         return (
//             <Settings />
//         )
// }

function conditionalButtons(editable) {
    if (!editable) {
        return (
            <button className="w3-button w3-black" onClick={() => { showEditable() }} style={{ width: "80px", outline: "none" }}>Edit</button>
        )
    }
    else {
        return (
            <button className="w3-button w3-black" onClick={() => { doneEditableAndSave() }} style={{ width: "80px", outline: "none" }}>Save</button>
        )
    }
}

function showImg(t) {
    if (t) {
        return (
            <div className="w3-modal w3-show">
                <div className="w3-modal-content w3-container w3-padding">
                    <div className="w3-row">
                        <span className="w3-right w3-btn" onClick={() => {
                                closeImageUpload()
                        }}>&times;</span>
                    </div>
                    <Imageupload />
                </div>
            </div>
        )
    }
}

function renderOptions(editable) {
    if (editable) {
        return (
            <div>
                <select className="w3-select w3-margin" style={{ outline: "none", width: "50%" }} onChange={(e) => { changeAddr(e.target.value) }}>
                    {
                        locality.map((v, i) => {
                            return (
                                <option key={i}>{v}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

export default function User(props) {
    var details = props.details
    return (
        <div className="w3-cell w3-mobile">
            <div className="w3-container w3-center w3-display-container" onClick={() => { showImageUpload() }}>
                <img src={`https://localhost:8000/images/${props.mid}.PNG?`+1000000000*Math.random()} onError={"this.src="+user} alt={"default"} className="w3-margin w3-circle" style={{ width:"150px", height:"150px"}} />
                <div className="w3-display-hover">Click to upload image</div>
            </div>

            {/* <input className="w3-input" type="file" value={props.img} onChange={(e) => { changeImg(e.target.files) }} />
            <button className="w3-btn" onClick={() => { }}>Upload</button> */}
            <div className="w3-container w3-margin w3-padding w3-center">
                <div className="w3-small w3-center">Name <br /><strong><span className="w3-xlarge" onBlur={(e) => { changeName(e.target.innerText) }} contentEditable={props.editable} suppressContentEditableWarning="true" style={{ outline: "none" }} spellCheck={false}>{details.Name}</span></strong></div>
                <div className="w3-small w3-center">Phone<br /><span className="w3-xlarge" contentEditable={props.editable} onBlur={(e) => { changePhone(e.target.innerText) }} suppressContentEditableWarning="true" style={{ outline: "none" }} spellCheck={false}><strong onChange={(e) => { }}>{details.Phone}</strong></span></div>
                <div className="w3-small w3-center">Email<br style={{ width: "80px", outline: "none" }} /><span className="w3-xlarge" onBlur={(e) => { changeEmail(e.target.innerText) }} contentEditable={props.editable} suppressContentEditableWarning="true" style={{ outline: "none" }} spellCheck={false}><strong onChange={(e) => { }}>{details.Email}</strong></span></div>
                <div className="w3-small w3-center">Pincode<br /><span className="w3-xlarge" style={{ outline: "none" }}><strong>{details.Pincode}</strong></span></div>
                {renderOptions(props.editable)}
                <div className="w3-margin w3-padding">
                    <button className="w3-button w3-black w3-margin" onClick={() => { logout() }}>Logout</button>
                    {conditionalButtons(props.editable)}
                </div>
            </div>
            {
                showImg(props.img)
            }
            {/* {conditional(props.settings)} */}
        </div>
    )
}

