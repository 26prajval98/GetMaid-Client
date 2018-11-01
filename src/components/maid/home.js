import React, { Component } from 'react'
import { connect } from 'react-redux'


function mapStateToProps(state) {
    return {
        login: state.main.login,
        signup: state.main.signup,
        loginDetails: state.main.loginDetails,
        success: state.main.success,
        msg: state.main.msg,
    }
}

class main extends Component {

    componentWillMount() {
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