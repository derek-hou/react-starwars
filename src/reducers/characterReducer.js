import { FETCH_CHARACTERS_AND_SHIPS, FETCH_CHARACTER } from '../actions/types';

const initialState = {
    characterItems: [],
    characterItem: {},
    starshipItem: {},
    starshipOnPAgeID: 0,
    nextPageURL: '',
    previousPageURL: '',
}

const characterReducer = (state = initialState, action) => {
    let strGetPage;
    let getPageCharAt;
    let strlength;
    let strNextPageNum;
    let strPreviousPageNum;
    let nextPageURL;
    let previousPageURL;
    
    switch(action.type) {
        case FETCH_CHARACTERS_AND_SHIPS: // fetch characters
            try {          
                let chars = action.payload[0];
                let ships = action.payload[1];
                // get next page number
                if(chars.next !== null) {
                    strGetPage = chars.next;
                    getPageCharAt = strGetPage.search('=');
                    strlength = strGetPage.length;
                    strNextPageNum = strGetPage.substr(getPageCharAt+1, strlength - getPageCharAt)
                    nextPageURL = '/page/' + strNextPageNum;
                } else {
                    nextPageURL = '/page/#';
                }

                // get previous page number
                if(chars.previous !== null) {
                    strGetPage = chars.previous;
                    getPageCharAt = strGetPage.search('=');
                    strlength = strGetPage.length;
                    strPreviousPageNum = strGetPage.substr(getPageCharAt+1, strlength - getPageCharAt)
                    previousPageURL = '/page/' + strPreviousPageNum;
                } else {
                    previousPageURL = '/page/#';
                }

                // use splice to add a starship to the list
                // use mod to get the index and where to place the starship
                let charIndex = 0;
                //let rtnArr = chars.results;
                let counter = 0;

                for(const element of chars.results) {
                    let charID = element.url.split('/');    // get the url and split to find the character ID
                    if (charID[charID.length-3] === 'people' && charID[charID.length-2]%8 === 0) {   // mod the character ID to see if it is a multiple of 8
                        charIndex = counter+1;                // use the index + 1 to place after 8th position
                        chars.results.splice(charIndex, 0, ships.results[counter]);
                    }
                    counter++;
                };

                return {
                    ...state, // current state
                    characterItems: chars.results, // the data that was fetched from characterActions
                    nextPageURL: nextPageURL,
                    previousPageURL: previousPageURL,
                };
            } catch(e) {
                console.error(e);
            };
        case FETCH_CHARACTER: // fetch individual character
            return {
                ...state, // current state
                characterItem: action.payload, // the data that was fetched from characterActions
            };
        default:
            return state;
    }
}

export default characterReducer;