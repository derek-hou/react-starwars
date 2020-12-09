import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect components to redux store
import { fetchCharacters } from '../actions/characterActions';
import Button from './Button';

class Characters extends Component {
    componentWillMount() {
        //console.log(this.props.page);
        this.props.fetchCharacters(this.props.page);
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
        
        const previousPageURL = this.props.previousPageURL;
        const nextPageURL = this.props.nextPageURL;
        return (
            <div>
                <h1>Characters</h1>
                <Button name="previous" key="previous" url={previousPageURL} />
                <Button name="next" key="next" url={nextPageURL} />
                <ul className="character-list">
                    {getCharacters}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    charactersProps: state.characterReducer.characterItems,    // characters is from the rootReducer in reducers/index.js and characterItems is from the initialState in reducers/characterReducer.js
    currentPage: state.characterReducer.currentPage,
    nextPageURL: state.characterReducer.nextPageURL,
    previousPageURL: state.characterReducer.previousPageURL
});

export default connect(mapStateToProps, { fetchCharacters })(Characters);