import { createStore } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../DevTools.js';
import { getCountries } from '../actions/actions-countries.js';

const store = createStore(rootReducer, DevTools.instrument());

store.dispatch(getCountries());

export default store;
