import {FIND_POKEMONS} from '../constants/actions/actionsTypes.js';
const initialState = '';

export default function (state = initialState, action) {
    switch (action.type){
        case FIND_POKEMONS: {
            return action.payload;
        }
        default: {
            return state
        }
    }
}
