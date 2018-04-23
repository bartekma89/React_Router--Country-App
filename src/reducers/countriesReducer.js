import countriesData from '../data/countries.json';
import * as constants from '../constants';

const initialState = {
	countries: countriesData,
	country: {},
	visibleCountries: countriesData,
};

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_COUNTRIES:
			return {
				...state,
				countries: state.countries,
			};
		case constants.GET_COUNTRY:
			const id = action.payload.countryId;
			const foundCountry = state.countries.find(
				country => country.id === parseInt(id, 10)
			);
			return {
				...state,
				country: foundCountry,
			};
		case constants.SEARCH_COUNTRIES:
			console.log('search countries');
			const filterText = action.payload.filterText;
			const foundCountries = state.countries.filter(country =>
				country.name.toLowerCase().includes(filterText)
			);
			return {
				...state,
				visibleCountries: foundCountries,
			};
		case constants.DELETE_COUNTRY:
			const noDeletedCountries = state.countries.filter(
				country => country.id !== action.payload.countryId
			);
			const noDeletedVisibleCountries = state.visibleCountries.filter(
				country => country.id !== action.payload.countryId
			);

			return {
				...state,
				countries: noDeletedCountries,
				visibleCountries: noDeletedVisibleCountries,
			};
		case constants.SET_CONTINENT:
			const chooseContinet = state.countries.filter(
				country => country.continent === action.payload.continentName
			);
			return {
				...state,
				visibleCountries: chooseContinet,
			};
		default:
			return state;
	}
};

export default countriesReducer;
