import React, { Component } from 'react'
import { connect } from 'react-redux'; // connect components to redux store
import { fetchStarship } from '../actions/starshipActions';
import Button from './Button';

class StarshipDetail extends Component {
    componentDidMount() {
        this.props.fetchStarship(this.props.starshipId);
    };

    render() {
        return (
            <div>
                <h3>{this.props.starshipProp.name}</h3>
                <Button name="back" key="back" page={this.props.pageId} url={`/page/` + this.props.pageId} />
                <p>Model: {this.props.starshipProp.model}</p>
                <p>Manufacturer: {this.props.starshipProp.manufacturer}</p>
                <p>Cost: {this.props.starshipProp.cost_in_credits}</p>
                <p>Length: {this.props.starshipProp.length}</p>
                <p>Max Atmosphering Speed: {this.props.starshipProp.max_atmosphering_speed}</p>
                <p>Crew: {this.props.starshipProp.crew}</p>
                <p>Passengers: {this.props.starshipProp.passengers}</p>
                <p>Cargo Capacity: {this.props.starshipProp.cargo_capacity}</p>
                <p>Consumables: {this.props.starshipProp.consumables}</p>
                <p>MGLT: {this.props.starshipProp.MGLT}</p>
                <p>Starship Class: {this.props.starshipProp.starship_class}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // character is from the rootReducer in reducers/index.js and characterItem is from the initialState in reducers/characterReducer.js
    starshipProp: state.starshipReducer.starshipItem,
});

export default connect(mapStateToProps, { fetchStarship })(StarshipDetail);