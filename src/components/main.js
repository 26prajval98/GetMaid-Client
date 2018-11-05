import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

import logo from "../images/logo/logo.png"

import { getCookie } from '../methods/cookies';
import { locality } from "../methods/config"

import { auth } from '../actions/main';
import { main as actionMain } from "../actions"
import * as actionSignup from "../actions/signup"

import Verify from "../components/verify"

function mapStateToProps(state) {
    return {
        login: state.main.login,
        signup: state.main.signup,
        loginDetails: state.main.loginDetails,
        success: state.main.success,
        msg: state.main.msg,
        user: state.client.user,
        Phone: state.signup.signup.Phone,
        Name: state.signup.signup.Name,
        Password: state.signup.signup.Password,
        Repassword: state.signup.signup.Repassword,
        Email: state.signup.signup.Email,
        HouseNo: state.signup.signup.HouseNo,
        Locality: state.signup.signup.Locality,
        PinCode: state.signup.signup.PinCode,
        IsMaid: state.signup.signup.IsMaid,
        msgSignup: state.signup.msg,
        successSignup: state.signup.success,
        phoneVerify: state.main.phoneVerify,
        otp: state.main.otp
    }
}

function showMsg(msg, success) {
    if (!success) {
        return (
            <div>
                <p className="w3-text-red w3-tiny">
                    {
                        msg
                    }
                </p>
            </div>
        )
    }
}

function renderStuff(props) {
    if (props.phoneVerify) {
        return (
            <Verify msg={props.msg} otp={props.otp} />
        )
    }
    
    if (props.user === "MAID") {
        return (
            <Redirect to="/maid" />
        )
    }
    else if (props.user === "HIRER") {
        return (
            <Redirect to="/hirer" />
        )
    }
    else if (props.user === "UA") {
        if (props.login) {
            return (
                <div className="w3-modal w3-show">
                    <div className="w3-modal-content w3-animate-top w3-card-4 w3-center">
                        <header className="w3-container">
                            <span onClick={() => actionMain.closeLogIn()} className="w3-button w3-display-topright w3-button-white w3-hover-none">&times;</span>
                        </header>
                        <div className="w3-container w3-padding-large w3-center">
                            <input value={props.loginDetails.EmailOrPhone} placeholder="Email or Phone number" onChange={(e) => actionMain.updateLoginEmailOrPh(e)} className="w3-input w3-center w3-margin-top" style={{ outline: "none" }} />
                            <input value={props.loginDetails.Password} placeholder="Password" type="password" onChange={(e) => actionMain.updateLoginPw(e)} className="w3-input w3-center w3-margin-top" style={{ outline: "none" }} />
                            <div className="W3-margin w3-padding">
                                <input type="checkbox" className="w3-check" onChange={() => { actionMain.updateLoginIsMaid() }} checked={props.loginDetails.IsMaid} /> <label>Maid</label>
                            </div>
                            <button className="w3-margin w3-padding w3-button w3-large w3-green" onClick={() => actionMain.userLogin()}>Login</button>
                        </div>
                        {showMsg(props.msg, props.success)}
                        <footer className="w3-container">
                            <p className="w3-tiny w3-center">GetMaid</p>
                        </footer>
                    </div>
                </div>
            )
        }
        if (props.signup) {
            return (
                <div className="w3-modal w3-show w3-center">
                    <div className="w3-modal-content w3-animate-top w3-card-4">
                        <header className="w3-container">
                            <span onClick={() => actionMain.closeSignup()} className="w3-button w3-display-topright w3-button-white w3-hover-none">&times;</span>
                        </header>
                        <div className="w3-container w3-padding-large w3-center">
                            <input value={props.Phone} onChange={(e) => { actionSignup.changePhone(e.target.value) }} placeholder="Phone Number" type="text" className="w3-input w3-center w3-margin-top" style={{ outline: "none" }} />
                            <input value={props.Name} onChange={(e) => { actionSignup.changeName(e.target.value) }} placeholder="Name" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input value={props.Password} onChange={(e) => { actionSignup.changePassword(e.target.value) }} placeholder="Password" type="password" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input value={props.Repassword} onChange={(e) => { actionSignup.changeRepassword(e.target.value) }} placeholder="Retype Password" type="password" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input value={props.Email} onChange={(e) => { actionSignup.changeEmail(e.target.value) }} placeholder="Email" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input value={props.HouseNo} onChange={(e) => { actionSignup.changeHouse(e.target.value) }} placeholder="House No / Landmark" className="w3-input w3-center" style={{ outline: "none" }} />
                            <div className="w3-margin w3-padding">
                                <label>Locality :</label>
                                <select value={props.Locality} onChange={(e) => { actionSignup.changeLocality(e.target.value) }} className="w3-select w3-center w3-margin" style={{ width: "40%", outline: "none", textAlignLast: "center" }}>
                                    {locality.map((v, i) => {
                                        return (
                                            <option key={i}>{v}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <input value={props.PinCode} placeholder="Pincode" className="w3-input w3-center" style={{ outline: "none" }} disabled={true} />
                            <div className="W3-margin w3-padding">
                                <input type="checkbox" className="w3-padding" onChange={() => actionSignup.changeMaid()} checked={props.IsMaid === 1} /> <label>Maid</label>
                            </div>
                            <button className="w3-margin w3-padding w3-button w3-blue" onClick={() => { actionSignup.signup() }}>Signup</button>
                        </div>
                        {showMsg(props.msgSignup, props.successSignup)}
                        <footer className="w3-container">
                            <p className="w3-tiny w3-center">GetMaid</p>
                        </footer>
                    </div>
                </div>
            )
        }
    }
}


class main extends Component {

    componentWillMount() {
        
        if (getCookie("token") !== "" && getCookie("token") !== undefined) {
            auth()
        }

        window.onkeydown = (e) => {
            if (e.key === "Escape") {
                actionMain.closeSignup()
                actionMain.closeLogIn()
            }
        }
    }

    render() {
        return (
            <div className="w3-container" style={{ paddingBottom: "100px", paddingTop: "100px" }}>
                <div className="w3-col w3-center w3-container l12 s12 m12">
                    <img src={logo} alt="GetMaid" width={"200px"} />
                </div>
                <div className="w3-container" style={{ minHeight: "300px" }}>
                    <div className="w3-container">
                        <div className="w3-center">
                            <button className="w3-button w3-center w3-padding w3-margin w3-xlarge w3-white" style={{ width: "300px", outline: "none" }} onClick={() => actionMain.showLogIn()}>Login</button>
                        </div>
                        <div className="w3-center">
                            <button className="w3-button w3-center w3-padding w3-margin w3-xlarge w3-white" style={{ width: "300px", outline: "none" }} onClick={() => actionMain.showSignup()}>Signup</button>
                        </div>
                    </div>
                </div>
                {
                    renderStuff(this.props)
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(main)