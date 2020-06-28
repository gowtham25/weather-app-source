
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Graph from './Graph';
import Home from './Home';

export default function App() {
	return (
		<div>
			<Router>
				<div>
					<Switch>
						<Route path="/Graph">
							<Graph />
						</Route>
						<Route path="/">
							<div className='header'>
								<span className='city-name'>Weather App</span>
							</div>
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

