import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect components to redux store
import { fetchCharacters } from '../actions/characterActions';
import Button from './Button';

class Characters extends Component {
    componentWillMount() {
        this.props.fetchCharacters(this.props.page);
    }

    render() {
        //console.log(this.props.charactersProps);
        const getCharacters = this.props.charactersProps.map((character, index) => {
            const characterIdArr = character.url.split('/');
            const characterId = characterIdArr[characterIdArr.length-2]; 

            return (<a href={`/page/` + this.props.page + `/character/` + characterId}>
                    <li className="characterTraits" key={index}>
                        <span>{character.name}</span>
                        <span>{character.birth_year}</span>
                        <span>{character.height}</span>
                        <span>{character.mass}</span>
                    </li>
                </a>)
        });
        //console.log(getCharacters);
        const previousPageURL = this.props.previousPageURL;
        const nextPageURL = this.props.nextPageURL;
        return (
            <div>
                <h1>Characters</h1>
                <Button name="previous" key="previous" page={this.props.page} url={previousPageURL} />
                <Button name="next" key="next" page={this.props.page} url={nextPageURL} />
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