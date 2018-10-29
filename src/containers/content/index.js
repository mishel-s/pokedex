import React, { Component } from 'react';
import styles from  './styles.css';
import getPokemonsInfo from './smart/getPokemons.js';
import {POKEMONS_INFO} from "../../constants/types";
import CreateContent from './smart/createContent.js';
import SpinnerThin from "../../components/common/spinners/spinnerThin";
import {connect} from "react-redux";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonsInfo: [],
        }
    }
    componentDidMount() {
        getPokemonsInfo()
            .then(data=> {
                this.setState({
                    pokemonsInfo: data,
                });
                {this.props.getArrayPokemonsInfo(data)};

            });
    }
    render() {
       if ((this.props.checkedTypes == 0) && this.props.pokemonsInfo.length) {
           return (
               <React.Fragment>
                   <div className={styles.content}>
                       <div id="pokemonsCards" className={styles.pokemonsCards}>
                           <CreateContent itemsPerPage={this.props.itemsPerPage} pokemons={this.props.pokemonsInfo}/>
                       </div>
                   </div>
               </React.Fragment>
           )
       } else if (this.props.filterPokemons.length ) {
           return (
               <React.Fragment>
                   <div className={styles.content}>
                       <div id="pokemonsCards" className={styles.pokemonsCards}>
                           <CreateContent itemsPerPage={this.props.itemsPerPage} pokemons={this.props.filterPokemons}/>
                       </div>
                   </div>
               </React.Fragment>
           )
       } else if (
         ((this.props.filterPokemons.length == 0) && this.props.checkedTypes.length)
         ||
         ((this.props.findPokemons.length > 0) && (this.props.pokemonsInfo.length == 0))
       ) {
           return (
               <React.Fragment>
                   <div className={styles.nopokemons} >
                       NO POKEMONS
                   </div>
               </React.Fragment>
           )
       } else {
           return (
               <SpinnerThin />
           );
       }
    }
}
export default connect(
    state => ({
        itemsPerPage: state.itemsPerPage,
        pokemonsTypes: state.pokemonsTypes,
        pokemonsInfo: state.pokemonsInfo.filter(pokemon=> pokemon.name.includes(state.findPokemons)),
        checkedTypes: state.checkedTypes,
        filterPokemons: state.filterPokemons.filter(pokemon=> pokemon.name.includes(state.findPokemons)),
        findPokemons: state.findPokemons
    }),
    dispatch => ({
        getArrayPokemonsInfo(value) {
            dispatch({type: POKEMONS_INFO, payload: value})
        },
    }),

)(Content);
