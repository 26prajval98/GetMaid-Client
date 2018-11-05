import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { connect } from "react-redux"

import Loader from "./components/loader";
import Index from "./components/main"

import * as Maid from "./components/maid"
import * as Hirer from "./components/hirer"

import Alert from "./components/alerts"

function mapStateToProps(state) {
	return {
		isLoading: state.loader.isLoading,
		alerts: state.main.alerts
	}
}

function render(isLoading) {
	if (!isLoading)
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" component={Index} />
						<Route exact path="/maid" component={Maid.Home} />
						<Route exact path="/hirer" component={Hirer.Home} />
					</div>
				</Router>
			</div>
		)
	else
		return (
			<Loader />
		)
}

function renderAlerts(alerts) {
	return alerts.map((v, i) => {
		return (
			<Alert msg={v.msg} success={v.success} key={i} id={i} />
		)
	})
}

class App extends Component {
	render() {
		return (
			<div>
				{renderAlerts(this.props.alerts)}
				{render(this.props.isLoading)}
			</div>
		);
	}
}

export default connect(mapStateToProps)(App);
