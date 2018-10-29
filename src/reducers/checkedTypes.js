import {ADD_TYPE_TO_LIST} from '../constants/actions/actionsTypes.js';

export default function (state = [], action) {
    switch (action.type){
        case ADD_TYPE_TO_LIST: {
            return action.payload
        }
        default: {
            return state
        }
    }
}
