import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import { connect } from "react-redux"

import Loader from "./components/loader";
import Index from "./components/main"
import * as Maid from "./components/maid"

function mapStateToProps(state) {
	return {
		isLoading: state.loader.isLoading
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
					</div>
				</Router>
			</div>
		)
	else
		return (
			<Loader />
		)
}

class App extends Component {
	render() {
		return (
			<div>
				{render(this.props.isLoading)}
			</div>
		);
	}
}

export default connect(mapStateToProps)(App);
