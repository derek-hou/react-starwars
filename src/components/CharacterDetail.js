import React, { Component } from 'react'
import { connect } from 'react-redux'; // connect components to redux store
import { fetchCharacter } from '../actions/characterActions';
import Button from './Button';

class CharacterDetail extends Component {
    componentWillMount() {
        this.props.fetchCharacter(this.props.characterId);
    }

    render() {
        return (
            <div>
                <h3>{this.props.characterProp.name}</h3>
                <Button name="back" key="back" page={this.props.pageId} url={`/page/` + this.props.pageId} />
                <p>Birth Year: {this.props.characterProp.birth_year}</p>
                <p>Eye Colour: {this.props.characterProp.eye_color}</p>
                <p>Gender: {this.props.characterProp.gender}</p>
                <p>Hair Colour: {this.props.characterProp.hair_color}</p>
                <p>Height: {this.props.characterProp.height}</p>
                <p>Mass: {this.props.characterProp.mass}</p>
                <p>Skin COlour: {this.props.characterProp.skin_color}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // character is from the rootReducer in reducers/index.js and characterItem is from the initialState in reducers/characterReducer.js
    characterProp: state.characterReducer.characterItem,
    currentPage: state.characterReducer.currentPage
});

export default connect(mapStateToProps, { fetchCharacter })(CharacterDetail);