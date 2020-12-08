import React, { Component } from 'react'

export default class characters extends Component {
    componentWillMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people') // the cors link helps to run cross origin resource sharing
        .then(res => res.json())
        .then(data => console.log(data));
    };

    render() {
        return (
            <div>
                <h1>Characters</h1>
            </div>
        )
    }
}
