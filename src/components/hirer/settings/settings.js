import React from 'react'
import { closeSettings } from '../../../actions/maid';

export default function Settings(props) {
    return (
        <div className="w3-modal w3-show">
            <div className="w3-modal-content w3-animate-opacity w3-card-4 w3-center">
                <header className="w3-container">
                    <span className="w3-button w3-display-topright w3-button-white w3-hover-none" onClick={()=>{closeSettings()}}>&times;</span>
                </header>
                <div className="w3-container w3-padding-large w3-center">
                    <input placeholder="Password" type="password" className="w3-input w3-center w3-margin-top" style={{ outline: "none" }} />
                    <div className="W3-margin w3-padding">
                        <input type="checkbox" className="w3-check"/> <label>Maid</label>
                    </div>
                    <button className="w3-margin w3-padding w3-button w3-large w3-green">Login</button>
                </div>
            </div>
        </div>
    )
}
