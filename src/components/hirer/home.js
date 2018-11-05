import React, { Component } from 'react'
import { connect } from 'react-redux'

import condrender from '../../methods/condrender';

import * as actionHirer from "../../actions/hirer"
import User from "./settings"
import Service from "./services"

function mapStateToProps(state) {
    return {
        loaded: state.main.loaded,
        user: state.client.user,
        details: state.hirer.details,
        pending: state.hirer.pending,
        addService: state.hirer.addService,
        editable: state.hirer.editable,
        addr: state.hirer.addr,
    }
}


function RenderFunctionalComponenets(props) {
    return (
        <div className="w3-container w3-padding" style={{ minHeight: window.innerHeight, width: "100%", fontFamily: 'Krub, sans-serif' }}>
            <div className="w3-container" style={{ width: "95%", minHeight: "90%" }}>
                <div className="w3-cell-row w3-margin">
                    <User details={props.info.details} settings={props.info.showSettings} editable={props.info.editable} addr={props.info.addr} />
                    <Service pending={props.info.pending} services={props.info.services} add={props.info.addService} />
                </div>
            </div>
        </div>
    )
}


class Home extends Component {
    componentDidMount() {
        if (!this.props.loaded)
            actionHirer.getAllHirer()
        else
            setInterval(() => {
                actionHirer.updatePending()
            }, 10 * 1000)
    }

    render() {
        return (
            <div>
                {condrender(RenderFunctionalComponenets, this.props, "HIRER")}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)
