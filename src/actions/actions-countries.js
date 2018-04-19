import * as constants from '../constants';

export function getCountries() {
	return {
		type: constants.GET_COUNTRIES,
	};
}

export function getCountry(countryId) {
	return {
		type: constants.GET_COUNTRY,
		payload: {
			countryId,
		},
	};
}

export function deleteCountry(countryId) {
	return {
		type: constants.DELETE_COUNTRY,
		payload: {
			countryId,
		},
	};
}

export function searchCountry(filterText) {
	return {
		type: constants.SEARCH_COUNTRIES,
		payload: {
			filterText,
		},
	};
}

export function setContinent(continentName) {
	return {
		type: constants.SET_CONTINENT,
		payload: {
			continentName,
		},
	};
}
