import React from 'react';
import { connect } from 'react-redux';
import * as countriesAction from '../actions/actions-countries';
import CountryFlagList from '../presentational/CountryFlagList';

class CountryFlagContainer extends React.Component {
	componentDidMount() {
		this.props.getCountries();
		this.props.searchCountries('');
	}

	searchCountries(event) {
		const value = event.target.value;

		this.props.searchCountries(value);
	}

	deleteCountry(countryId, event) {
		this.props.deleteCountry(countryId);
	}

	render() {
		return (
			<div>
				<div className="search text-center">
					<input
						type="text"
						onChange={this.searchCountries.bind(this)}
						placeholder="Filter..."
					/>
				</div>
				<CountryFlagList
					countries={this.props.visibleCountries}
					deleteCountry={this.deleteCountry.bind(this)}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		countries: state.countriesStore.countries,
		visibleCountries: state.countriesStore.visibleCountries,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getCountries: () => dispatch(countriesAction.getCountries()),
		searchCountries: filterText =>
			dispatch(countriesAction.searchCountry(filterText)),
		deleteCountry: id => dispatch(countriesAction.deleteCountry(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	CountryFlagContainer
);
