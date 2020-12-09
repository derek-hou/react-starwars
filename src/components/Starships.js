import React, { Component } from 'react'

export default class Starships extends Component {
    componentWillMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships') // the cors link helps to run cross origin resource sharing
        .then(res => res.json())
        .then(data => console.log(data));
    };

    render() {
        return (
            <div>
                <h1>Starships</h1>
            </div>
        )
    }
}
