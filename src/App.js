import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './presentational/Navigation-component';
import Home from './presentational/Home-component';
import Contact from './presentational/Contact-component';
import PageNotFound from './presentational/PageNotFound-component';
import CountryFlagContainer from './container/CountryFlagContainer';
import CountryDetailsContainer from './container/CountryDetailsContainer';
import ContinentsContainer from './container/ContinentsContainer';

const App = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						path="/countries/country/:countryId"
						component={CountryDetailsContainer}
					/>
					<Route path="/countries" component={CountryFlagContainer} />
					<Route path="/continents" component={ContinentsContainer} />
					<Route path="/contact" component={Contact} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
