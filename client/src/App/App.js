import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import Create from './pages/Create.js';
import Update from './pages/Update.js';

class App extends Component {
	render() {
		const App = () => (
			<div>
				<Switch>
					<Route exact path="/" component={Home}/>

					<Route path="/create" component={Create}/>
					<Route path="/update/:id" component={Update}/>
				</Switch>
			</div>
		)
		return (
			<Switch>
				<App />
			</Switch>
		);
	}
}

export default App;