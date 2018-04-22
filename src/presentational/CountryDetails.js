import React from 'react';

const CountryDetails = props => {
	const {
		imageUrl,
		name,
		continent,
		capital,
		currency,
		populace,
	} = props.country;
	return (
		<div className="country-wrapper">
			<header>
				<img className="country-photo" src={imageUrl} alt="country" />
			</header>
			<div className="country-info">
				<h1>{name}</h1>
				<h2>Continent: {continent}</h2>

				<div className="info">
					<div>
						<span>{populace}</span>
						<span>Population [mln]</span>
					</div>
					<div>
						<span>{capital}</span>
						<span>Capital</span>
					</div>
					<div>
						<span>{currency}</span>
						<span>Currency</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
