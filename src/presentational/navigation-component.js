import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = () => {
	return (
		<div>
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<NavLink className="navbar-brand" to="/">
							Countries App
						</NavLink>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li>
								<NavLink to="/countries">Countries</NavLink>
							</li>
							<li>
								<NavLink to="/continents">Continents</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
