import {combineReducers} from 'redux';
import itemsPerPage from './itemsPerPage.js';
import pokemonsTypes from './pokemonsTypes.js';
import pokemonsInfo from './pokemonsInfo.js';
import checkedTypes from './checkedTypes.js';
import filterPokemons from './filterPokemonsStore.js';
import findPokemons from './findPokemons.js';

export default combineReducers ({
    itemsPerPage: itemsPerPage,
    pokemonsTypes: pokemonsTypes,
    pokemonsInfo: pokemonsInfo,
    checkedTypes: checkedTypes,
    filterPokemons: filterPokemons,
    findPokemons: findPokemons
})
