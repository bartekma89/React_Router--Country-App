import React from 'react';
import { connect } from 'react-redux';
import * as countriesAction from '../actions/actions-countries';
import CountryDetails from '../presentational/CountryDetails';

class CountryDetailsContainer extends React.Component {
	componentDidMount() {
		const countryId = this.props.match.params.countryId;
		this.props.getCountry(countryId);
	}

	render() {
		return <CountryDetails country={this.props.country} />;
	}
}

const mapStateToProps = state => {
	return {
		country: state.countriesStore.country,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getCountry: id => dispatch(countriesAction.getCountry(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	CountryDetailsContainer
);
