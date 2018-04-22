import countriesData from '../data/countries.json';
import * as constants from '../constants';

const initialState = {
	countries: countriesData,
	country: {},
};

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_COUNTRIES:
			console.log('get countries');
			return {
				...state,
				countries: state.countries,
			};
		case constants.GET_COUNTRY:
			console.log('get country');
			const id = action.payload.countryId;
			const foundCountry = state.countries.find(
				country => country.id === parseInt(id, 10)
			);
			return {
				...state,
				country: foundCountry,
			};
		default:
			return state;
	}
};

export default countriesReducer;
