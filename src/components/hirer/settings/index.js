import React from 'react'

import { locality } from "../../../methods/config";

import { showEditable, doneEditableAndSave, changeName, changePhone, changeEmail, changeAddr, logout, searchService, changeSearchService } from '../../../actions/hirer';

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
        <div className="w3-container w3-row">
            <div className="w3-container w3-center w3-cell w3-mobile w3-cel-middle" style={{ minHeight: "200px", width: "800px", minWidth: "200px" }}>
                <p className="w3-xlarge w3-text-blue">Find Maid</p>
                <div className="w3-container w3-center w3-padding w3-hide-small w3-hide-medium" style={{ width: "100%" }}>
                    <select className="w3-select w3-margin" style={{ outline: "none", width: "50%" }} value={props.add} onChange={(e) => { changeSearchService(e.target.value) }}>
                        <option>Cleaning</option>
                        <option>Baby Sitting</option>
                        <option>Washing Clothes</option>
                        <option>Washing Utensils</option>
                        <option>Gardening</option>
                    </select>
                    <button className="w3-button w3-green w3-circle w3-margin w3-large" style={{ outline: "none" }} onClick={() => { searchService() }}><i className="fa fa-search" aria-hidden="true"></i></button>
                    <br />
                    <button className="w3-button w3-margin">Previous services</button>
                </div>
                <div className="w3-container w3-center w3-padding w3-hide-large" style={{ width: "100%" }}>
                    <select className="w3-select w3-margin" style={{ outline: "none", width: "50%" }} value={props.add} onChange={(e) => { changeSearchService(e.target.value) }}>
                        <option>Cleaning</option>
                        <option>Baby Sitting</option>
                        <option>Washing Clothes</option>
                        <option>Washing Utensils</option>
                        <option>Gardening</option>
                    </select>
                    <button className="w3-button w3-green w3-circle w3-margin w3-large" style={{ outline: "none" }} onClick={() => { searchService() }}><i className="fa fa-search" aria-hidden="true"></i></button>
                    <br />
                    <button className="w3-button w3-margin">Previous services</button>
                </div>
            </div>
            <div className="w3-container w3-padding w3-center w3-cell w3-mobile">
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
            {/* {conditional(props.settings)} */}
        </div>
    )
}

