import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import helper from './components/helper';
import Store from "./stores"
import { Provider } from 'react-redux'

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<div className="App">
					<Router>
						<Route exact path="/" component={helper} />
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
