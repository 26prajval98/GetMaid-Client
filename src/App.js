import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import { connect } from "react-redux"

import Loader from "./components/loader";
import Index from "./components/main"

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
					<Route exact path="/" component={Index}></Route>
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
