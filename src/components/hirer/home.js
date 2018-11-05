import React, { Component } from 'react'
import { connect } from 'react-redux'

import condrender from '../../methods/condrender';

import User from "./settings"
import Service from "./services"

function mapStateToProps(state) {
    return {
        loaded: state.main.loaded,
        user: state.client.user,
        details: state.maid.details,
        online: state.maid.online,
        pending: state.maid.pending,
        services: state.maid.services,
        addService: state.maid.addService,
        showSettings: state.maid.showSettings,
        editable: state.maid.editable,
        addr: state.maid.addr,
        earnings: state.maid.earnings,
        redirectToIndex: state.main.redirectToIndex
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
    // componentDidMount() {
    //     if (!this.props.loaded)
    //         actionMaid.getAllMaid()
    //     else
    //         setInterval(() => {
    //             actionMaid.updatePending()
    //         }, 10 * 1000)
    // }

    render() {
        return (
            <div>
                {condrender(RenderFunctionalComponenets, this.props, "HIRER")}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)
