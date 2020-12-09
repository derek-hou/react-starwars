import { FETCH_CHARACTERS, PAGINATE_CHARACTERS } from '../actions/types';

const initialState = {
    characterItems: [],
    currentPage: 1,
    nextPageURL: '',
    previousPageURL: '',
}

export default function(state = initialState, action) {
    let strNext;
    let getPageCharAt;
    let strlength;
    let nextPageURL;
    
    switch(action.type) {
        case 'FETCH_CHARACTERS': // fetch characters
            strNext = action.payload.next;
            getPageCharAt = strNext.search('=');
            strlength = strNext.length;
            nextPageURL = '/page/' + strNext.substr(getPageCharAt+1, strlength - getPageCharAt);

            return {
                ...state, // current state
                characterItems: action.payload.results, // the data that was fetched from characterActions
                currentPage: state.currentPage,
                nextPageURL: nextPageURL,
                previousPageURL: action.payload.previous,
            };
        case 'NEXT':
            strNext = action.payload.next;
            getPageCharAt = strNext.search('=');
            strlength = strNext.length;
            nextPageURL = '/page/' + strNext.substr(getPageCharAt+1, strlength - getPageCharAt);

            return {
                ...state, // current state
                characterItems: action.payload.results, // the data that was fetched from characterActions
                currentPage: state.currentPage+1,
                nextPageURL: nextPageURL,
                previousPageURL: action.payload.previous,
            };
        default:
            return state;
    }
}



// paginate characters