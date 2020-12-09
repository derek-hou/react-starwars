import { FETCH_CHARACTERS, PAGINATE_CHARACTERS } from './types';

export const fetchCharacters = () => (dispatch) => {
    fetch('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/') // the cors link helps to run cross origin resource sharing
    .then(res => res.json())
    .then(characters => dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
    }));
}