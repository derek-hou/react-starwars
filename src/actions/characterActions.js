import { FETCH_CHARACTERS, FETCH_CHARACTER } from './types';

export const fetchCharacters = (page) => (dispatch) => {
    const urlStr = page == null ? 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/' : 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?page=' + page;

    fetch(urlStr) // the cors link helps to run cross origin resource sharing
    .then(res => res.json())
    .then(characters => dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
    }));
}

export const fetchCharacter = (id) => (dispatch) => {
    const urlStr = 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/' + id + '/';
    
    fetch(urlStr) // the cors link helps to run cross origin resource sharing
    .then(res => res.json())
    .then(character => dispatch({
        type: FETCH_CHARACTER,
        payload: character
    }));
}