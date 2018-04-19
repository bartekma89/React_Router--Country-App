import countriesData from '../data/countries.json';
import * as constants from '../constants';

const initialState = {
	countries: countriesData,
};

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_COUNTRIES:
			return {
				...state,
				countries: state.countries,
			};
		default:
			return state;
	}
};

export default countriesReducer;
