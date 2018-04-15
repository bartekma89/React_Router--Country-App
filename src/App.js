import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory,
	Link,
	IndexLink,
} from 'react-router';

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Navigation}>
					<IndexRoute component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/hello/:name" component={Hello} />
					<Route path="*" component={PageNotFound} />
				</Route>
			</Router>
		);
	}
}

const Navigation = props => (
	<div>
		<ul>
			<li>
				<IndexLink to="/" activeStyle={{ color: '#48abee' }}>
					Home
				</IndexLink>
			</li>
			<li>
				<Link
					to="/Contact"
					activeStyle={{ color: '#48abee' }}
					onlyActiveOnIndex
				>
					Contact
				</Link>
			</li>
		</ul>
		{props.children}
	</div>
);
const Home = () => <h1>I am Home Component</h1>;
const Contact = () => <h1>I am Contact Component</h1>;
const PageNotFound = () => <h1>404 Not Found</h1>;
const Hello = props => <h1>Witaj, {props.params.name}</h1>;

export default App;
