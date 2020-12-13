import { FETCH_STARSHIP } from './types';

export const fetchStarship = (id) => (dispatch) => {
    const urlStr = 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/' + id + '/';
    
    fetch(urlStr) // the cors link helps to run cross origin resource sharing
    .then(res => res.json())
    .then(starship => dispatch({
        type: FETCH_STARSHIP,
        payload: starship
    }));
}