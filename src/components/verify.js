import React from 'react'
import { changeOtp, verifyOtp, unsetOtp } from '../actions/main';
import { logout } from '../actions/maid';

export default function Verify(props) {
    return (
        <div className="w3-modal w3-show">
            <div className="w3-modal-content">
                <div className="w3-container w3-center">
                    <h2 className="w3-center">Phone Verification</h2>
                    <input placeholder="OTP" value={props.otp} onChange={(e) => { changeOtp(e.target.value) }} className="w3-input w3-center w3-margin" style={{ maxWidth: "400px", width: "60%", display : "inline", outline : "none"}} />
                    <br />
                    <button className="w3-button" onClick={() => { logout(); unsetOtp() }}>Logout</button>
                    <button className="w3-button" onClick={() => { verifyOtp() }}>Verify</button>
                    <p className="w3-center w3-red">{props.msg}</p>
                </div>
            </div>
        </div>
    )
}
