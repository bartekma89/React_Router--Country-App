import React from 'react';
import CountryFlag from './CountryFlag.js';
import { Link } from 'react-router-dom';

const CountryFlagList = props => {
	return (
		<div className="countries-list">
			{props.countries.map(country => {
				return (
					<div className="single-country" key={country.id}>
						<Link
							className="logo"
							to={'/countries/country/' + country.id}
						>
							<CountryFlag country={country} />
						</Link>
						<button
							className="btn btn-danger"
							type="button"
							onClick={props.deleteCountry.bind(this, country.id)}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default CountryFlagList;
