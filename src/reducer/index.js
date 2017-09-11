import { combineReducers } from 'redux';
import results from './results';
import selectedCafe from './selectedCafe';

export default combineReducers({
  results,
  selectedCafe
});
