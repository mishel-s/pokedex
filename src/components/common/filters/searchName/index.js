import React, { Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {FIND_POKEMONS} from '../../../../constants/actions/actionsTypes.js';

class searchName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'bt_10',
        }
    }
    getStyles = (name) => {
        const {active} = this.state;
        return active === name ? styles.active : '';
    }
    render() {
        return (
            <React.Fragment>
                <div className={styles.searchName}>
                    <span>Search by Name:</span>
                    <input id="searchName" type="text"  onChange={ (e) => {this.props.findPokemons(e.target.value.toLowerCase())}} placeholder="Type name" />
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        itemsPerPage: state.itemsPerPage,
        pokemonsTypes: state.pokemonsTypes,
        pokemonsInfo: state.pokemonsInfo,
        checkedTypes: state.checkedTypes,
        filterPokemons: state.filterPokemons
    }),
    dispatch => ({
        findPokemons: (value) => {
            dispatch({type: FIND_POKEMONS, payload: value})
        },
    }),

)(searchName);
