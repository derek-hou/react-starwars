import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import starshipReducer from './starshipReducer';

export default combineReducers({
    characterReducer: characterReducer,
    starshipReducer: starshipReducer
});