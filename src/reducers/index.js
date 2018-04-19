import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
	countriesStore: countriesReducer,
});

export default rootReducer;
