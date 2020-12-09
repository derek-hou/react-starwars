import { FETCH_CHARACTERS, PAGINATE_CHARACTERS } from '../actions/types';

const initialState = {
    characterItems: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_CHARACTERS': // fetch characters
            return {
                ...state, // current state
                characterItems: action.payload.results // the data that was fetched from characterActions
            };
        default:
            return state;
    }
}



// paginate characters