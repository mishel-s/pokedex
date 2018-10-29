import {FILTER_POKEMONS} from '../constants/actions/actionsTypes.js';

export default function (state = [], action) {
    switch (action.type){
        case FILTER_POKEMONS: {
            return action.payload;
        }
        default: {
            return state
        }
    }
}
