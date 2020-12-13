import { FETCH_CHARACTERS_AND_SHIPS, FETCH_CHARACTER } from './types';

/* export const fetchCharacters = (page) => (dispatch) => {
    const urlStr = page == null ? 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/' : 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?page=' + page;

    fetch(urlStr) // the cors link helps to run cross origin resource sharing
    .then(res => res.json())
    .then(characters => dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
    }));
} */

export const fetchCharactersAndShips = (page) => async (dispatch) => {
    const characterURLStr = page == null ? 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/' : 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?page=' + page;
    const starshipURLStr = page == null ? 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/' : 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/?page=' + parseInt(Math.floor(Math.random() * 4) + 1);
    let urls = [characterURLStr, starshipURLStr];
    let requests = urls.map(url => fetch(url));
    
    await Promise.all(requests)
    .then(responses => {
        return responses;
    })    
    .then(responses => {
        Promise.all(responses.map(r => r.json()))
        // all JSON answers are parsed: "totalres" is the array of them
        .then(totalres => {
            dispatch({
                type: FETCH_CHARACTERS_AND_SHIPS,
                payload: totalres
            });
        });
    });
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