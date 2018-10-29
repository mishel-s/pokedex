import React, { Component } from 'react';
import styles from  './styles.css';
import {connect} from 'react-redux';
import {GET_ARRAY_POKEMONS_TYPES} from "../../constants/actions/actionsTypes";
import getPokemonsTypes from './smart/getPokemonsTypes.js';
import CreateTypesList from './smart/createTypesList.js';
import {FILTER_POKEMONS} from "../../constants/actions/actionsTypes";
import {ADD_TYPE_TO_LIST} from "../../constants/actions/actionsTypes";
import {REMOVE_TYPE_FROM_LIST} from "../../constants/actions/actionsTypes";

class tagsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
        }
    }
    componentDidMount() {
      let pokemonsTypes = [];
      getPokemonsTypes()
          .then(data => {
              for(let i=0; i < data.results.length; i++) {
                  pokemonsTypes.push(data.results[i].name)
              }
              this.setState({
                  types: pokemonsTypes,
              });
          })
    }

    render() {
      return (
          <React.Fragment>
            <div className={styles.tagsPanel}>
                Find by Type:
                <CreateTypesList
                    pokemonsInfo = {this.props.pokemonsInfo}
                    types = {this.state.types}
                    filterContentPokemons = {this.props.filterContentPokemons}
                    addTypeToList = {this.props.addTypeToList}
                    removeTypeFromList = {this.props.removeTypeFromList}
                />
            </div>
            {this.props.getArrayPokemonsTypes(this.state.types)}
          </React.Fragment>
      )
    }
}

export default connect(
    state => ({
        pokemonsInfo: state.pokemonsInfo.filter(pokemon=> pokemon.name.includes(state.findPokemons)),
        pokemonsTypes: state.pokemonsTypes,
        checkedTypes: state.checkedTypes,
        filterPokemons: state.filterPokemons
    }),
    dispatch => ({
        getArrayPokemonsTypes(value) {
            dispatch({type: GET_ARRAY_POKEMONS_TYPES, payload: value})
        },
        filterContentPokemons(value) {
            dispatch({type: FILTER_POKEMONS, payload: value})
        },
        addTypeToList(value) {
            dispatch({type: ADD_TYPE_TO_LIST, payload: value})
        },
        removeTypeFromList(value) {
            dispatch({type: REMOVE_TYPE_FROM_LIST, payload: value})
        },
    })
)(tagsPanel);
