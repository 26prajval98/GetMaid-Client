import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

import logo from "../images/logo/logo.png"

import { main as actionMain } from "../actions"
import { getCookie } from '../methods/cookies';
import { auth } from '../actions/main';

function mapStateToProps(state) {
    return {
        login: state.main.login,
        signup: state.main.signup,
        loginDetails: state.main.loginDetails,
        success: state.main.success,
        msg: state.main.msg,
        user: state.user.user
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
                    <div className="w3-modal-content w3-animate-top w3-card-4">
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
                <div className="w3-modal w3-show">
                    <div className="w3-modal-content w3-animate-top w3-card-4">
                        <header className="w3-container">
                            <span onClick={() => actionMain.closeSignup()} className="w3-button w3-display-topright w3-button-white w3-hover-none">&times;</span>
                        </header>
                        <div className="w3-container w3-padding-large w3-center">
                            <input placeholder="Email" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input placeholder="Password" type="password" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input placeholder="Retype Password" type="password" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input placeholder="Phone Number" type="number" className="w3-input w3-center w3-margin-top" style={{ outline: "none" }} min={10000000000} max={9999999999} />
                            <input placeholder="Name" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input placeholder="House No" className="w3-input w3-center" style={{ outline: "none" }} />
                            <input placeholder="Locality" className="w3-input w3-center" style={{ outline: "none" }} min={10000000000} max={9999999999} />
                            <input placeholder="Pincode" className="w3-input w3-center" style={{ outline: "none" }} disabled={true} />
                            <div className="W3-margin w3-padding">
                                <input type="checkbox" className="w3-padding" /> <label>Maid</label>
                            </div>
                            <button className="w3-margin w3-padding w3-button">Signup</button>
                        </div>
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
        if (getCookie("token") !== "") {
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