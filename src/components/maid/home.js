import React, { Component } from 'react'
import { connect } from 'react-redux'
import condrender from '../../methods/condrender';

import User from "./settings"
import Service from "./services"

import "./maid.css"

function mapStateToProps(state) {
    return {
        user: state.client.user,
    }
}

function RenderFunctionalComponenets(props) {
    return (
        <div className="w3-container w3-padding" style={{ minHeight: window.innerHeight, width : "100%", fontFamily: 'Krub, sans-serif' }}>
            <div className="w3-container" style={{ width: "95%", minHeight: "90%" }}>
                <div className="w3-row w3-padding" style={{ minHeight: "30px", height: "10%" }}>
                    <span className="w3-left w3-large">
                        <i> <b>Total Earnings Today(INR) </b></i>: 10000
                        <button className="w3-tiny w3-btn w3-hover-none w3-text-red">More</button>
                    </span>
                    <label className="switch w3-right">
                        <input type="checkbox" />
                        <span className="slider round" />
                        <br />
                    </label>
                    <span className="w3-right w3-tiny w3-text-red w3-margin">Go Online</span>
                </div>
                <div className="w3-cell-row w3-margin">
                    <User />
                    <Service />
                </div>
            </div>
        </div>
    )
}


class Home extends Component {

    render() {
        return (
            <div>
                {condrender(RenderFunctionalComponenets, this.props, "MAID")}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)