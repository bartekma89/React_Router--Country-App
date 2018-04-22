import React from 'react';
import { connect } from 'react-redux';
import * as countriesAction from '../actions/actions-countries';
import CountryFlagList from '../presentational/CountryFlagList';

class CountryFlagContainer extends React.Component {
	componentDidMount() {
		this.props.getCountries();
	}

	render() {
		return <CountryFlagList countries={this.props.countries} />;
	}
}

const mapStateToProps = state => {
	return {
		countries: state.countriesStore.countries,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getCountries: () => dispatch(countriesAction.getCountries()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	CountryFlagContainer
);
