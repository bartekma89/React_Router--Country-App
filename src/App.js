import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './presentational/navigation-component';
import Home from './presentational/home-component';
import Contact from './presentational/contact-component';
import PageNotFound from './presentational/pageNotFound-component';

const App = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Contact" component={Contact} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
