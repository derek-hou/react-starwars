import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect components to redux store
import { fetchCharacters } from '../actions/characterActions';

class Characters extends Component {
    componentWillMount() {
        this.props.fetchCharacters();
    }

    render() {
        //console.log(this.props.charactersProps);
        const getCharacters = this.props.charactersProps.map((character, index) => (
            <a href={`/character/` + (parseInt(index)+1)}>
                <li className="characterTraits" key={index}>
                    <span>{character.name}</span>
                    <span>{character.birth_year}</span>
                    <span>{character.height}</span>
                    <span>{character.mass}</span>
                </li>
            </a>
        ));
        
        return (
            <div>
                <h1>Characters</h1>
                <ul className="character-list">
                    {getCharacters}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    charactersProps: state.characters.characterItems    // characters is from the rootReducer in reducers/index.js and characterItems is from the initialState in reducers/characterReducer.js
});

export default connect(mapStateToProps, { fetchCharacters })(Characters);