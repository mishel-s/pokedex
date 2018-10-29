import {GET_ARRAY_POKEMONS_TYPES} from '../constants/actions/actionsTypes.js'

export default function (state = [], action) {
    switch (action.type){
        case GET_ARRAY_POKEMONS_TYPES: {
            return action.payload;
        }
        default: {
            return state
        }
    }
}