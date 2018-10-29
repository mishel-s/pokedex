import {POKEMONS_INFO} from '../constants/types.js'

export default function (state = [], action) {
    switch (action.type){
        case POKEMONS_INFO: {
            return action.payload;
        }
        default: {
            return state
        }
    }
}