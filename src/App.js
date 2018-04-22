import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './presentational/navigation-component';
import Home from './presentational/home-component';
import Contact from './presentational/contact-component';
import PageNotFound from './presentational/pageNotFound-component';
import CountryFlagContainer from './container/CountryFlagContainer';
import CountryDetailsContainer from './container/CountryDetailsContainer';

const App = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/countries"
						component={CountryFlagContainer}
					/>
					<Route
						path="/countries/country/:countryId"
						component={CountryDetailsContainer}
					/>
					<Route path="/contact" component={Contact} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
