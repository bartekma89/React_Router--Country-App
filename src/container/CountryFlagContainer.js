import React from 'react';
import { connect } from 'react-redux';
import * as countriesAction from '../actions/actions-countries';
import CountryFlagList from '../presentational/CountryFlagList';

class CountryFlagContainer extends React.Component {
	componentDidMount() {
		this.props.getCountries();
		this.props.searchCountries('');
	}

	search(event) {
		const value = event.target.value;

		this.props.searchCountries(value);
	}

	render() {
		return (
			<div>
				<div className="search text-center">
					<input
						type="text"
						onChange={this.search.bind(this)}
						placeholder="Filter..."
					/>
				</div>
				<CountryFlagList countries={this.props.visibleCountries} />
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	CountryFlagContainer
);
