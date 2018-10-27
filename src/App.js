import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import helper from './components/helper';

import { connect } from "react-redux"
import { setLoader, unsetLoader } from "./actions/index"
import Loader from "./components/loader";

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
					<Route exact path="/" component={helper} />
				</Router>
			</div>
		)
	else
		return (
			<Loader />
		)
}

class App extends Component {

	componentDidMount(){
		window.onkeydown = (e) => {
			console.log(e)
            if (e.key === "s") {
				setLoader()
			}
			else if(e.key === "c"){
				unsetLoader()
			}
        }
	}

	render() {
		return (
			<div>
				{render(this.props.isLoading)}
			</div>
		);
	}
}

export default connect(mapStateToProps)(App);
