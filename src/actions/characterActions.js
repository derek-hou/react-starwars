import { FETCH_CHARACTERS, NEXT_PAGE, PREVIOUS_PAGE } from './types';

export const fetchCharacters = (page) => (dispatch) => {
    const urlStr = page == null ? 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/' : 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?page=' + page;

    fetch(urlStr) // the cors link helps to run cross origin resource sharing
    .then(res => res.json())
    .then(characters => dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
    }));
}