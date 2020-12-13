import { FETCH_STARSHIP } from '../actions/types';

const initialState = {
    starshipItem: {},
}

const starshipReducer = (state = initialState, action) => {   
    switch(action.type) {
        case FETCH_STARSHIP: // fetch individual character
            return {
                ...state, // current state
                starshipItem: action.payload, // the data that was fetched from characterActions
            };
        default:
            return state;
    }
}

export default starshipReducer;