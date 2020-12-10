import { FETCH_CHARACTERS, FETCH_CHARACTER } from '../actions/types';

const initialState = {
    characterItems: [],
    characterItem: {},
    currentPage: 1,
    nextPageURL: '',
    previousPageURL: '',
}

export default function(state = initialState, action) {
    let strGetPage;
    let getPageCharAt;
    let strlength;
    let nextPageURL;
    let previousPageURL;
    
    console.log(action.type);
    switch(action.type) {
        case FETCH_CHARACTERS: // fetch characters
            // get next page number
            if(action.payload.next !== null) {
                strGetPage = action.payload.next;
                getPageCharAt = strGetPage.search('=');
                strlength = strGetPage.length;
                nextPageURL = '/page/' + strGetPage.substr(getPageCharAt+1, strlength - getPageCharAt);
            } else {
                nextPageURL = '/page/#';
            }

            // get previous page number
            if(action.payload.previous !== null) {
                strGetPage = action.payload.previous;
                getPageCharAt = strGetPage.search('=');
                strlength = strGetPage.length;
                previousPageURL = '/page/' + strGetPage.substr(getPageCharAt+1, strlength - getPageCharAt);
            } else {
                previousPageURL = '/page/#';
            }

            return {
                ...state, // current state
                characterItems: action.payload.results, // the data that was fetched from characterActions
                currentPage: state.currentPage,
                nextPageURL: nextPageURL,
                previousPageURL: previousPageURL,
            };
        case FETCH_CHARACTER: // fetch individual character
            return {
                ...state, // current state
                characterItem: action.payload, // the data that was fetched from characterActions
                currentPage: state.currentPage
            };
        case NEXT_PAGE:
            return {
                ...state, // current state
                currentPage: state.currentPage+1,
            };
        default:
            return state;
    }
}



// paginate characters