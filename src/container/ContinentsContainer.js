import React from 'react';
import { connect } from 'react-redux';
import * as countriesAction from '../actions/actions-countries';
import CountryFlagList from '../presentational/CountryFlagList';

class ContinentsContainer extends React.Component {
	componentDidMount() {
		this.props.getCountries();
	}

	chooseContinent(event) {
		this.props.chooseContinent(event.target.value);
	}

	deleteCountry(countryId, event) {
		this.props.deleteCountry(countryId);
	}

	render() {
		return (
			<div>
				<select onChange={this.chooseContinent.bind(this)}>
					<option disabled selected>
						Continents
					</option>
					<option value="Europa">Europa</option>
					<option value="Afryka">Afryka</option>
				</select>
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
		visibleCountries: state.countriesStore.visibleCountries,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		chooseContinent: continent =>
			dispatch(countriesAction.setContinent(continent)),
		deleteCountry: id => dispatch(countriesAction.deleteCountry(id)),
		getCountries: () => dispatch(countriesAction.getCountries()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	ContinentsContainer
);
