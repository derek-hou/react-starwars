import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect components to redux store
import { fetchCharactersAndShips } from '../actions/characterActions';
import Button from './Button';

class Characters extends Component {
    async componentDidMount() {
       await this.props.fetchCharactersAndShips(this.props.page);
    }

    render() {
        //console.log(this.props.charactersProps);
        const getCharacters = this.props.charactersProps.map((character, index) => {
            if(character.hasOwnProperty('starship_class')) {
                const starshipIdArr = character.url.split('/');
                const starshipId = starshipIdArr[starshipIdArr.length-2];

                return (
                    <a className="btn-list" href={`/page/` + this.props.page + `/starships/` + starshipId} key={index}>
                        <li className="characterTraits">
                            <span>{character.name}</span>
                        </li>
                    </a>
                )
            } else {
                const characterIdArr = character.url.split('/');
                const characterId = characterIdArr[characterIdArr.length-2];

                return (
                    <a className="btn-list" href={`/page/` + this.props.page + `/character/` + characterId} key={index}>
                        <li className="characterTraits">
                            <span>{character.name}</span>
                            <span>{character.birth_year}</span>
                            <span>{character.height}</span>
                            <span>{character.mass}</span>
                        </li>
                    </a>
                )
            }            
        });

        const previousPageURL = this.props.previousPageURL;
        const nextPageURL = this.props.nextPageURL;
        return (
            <div>
                <h1>Characters</h1>
                <div className="button-nav flex">
                    <Button name="previous" key="previous" page={this.props.page} url={previousPageURL} />
                    <Button name="next" key="next" page={this.props.page} url={nextPageURL} />
                </div>
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

export default connect(mapStateToProps, { fetchCharactersAndShips })(Characters);