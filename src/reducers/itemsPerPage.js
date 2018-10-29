import {SET_ITEMS_PER_PAGE} from '../constants/types.js'

export default function (state = [], action) {
    switch (action.type){
        case SET_ITEMS_PER_PAGE: {
            return action.payload;
        }
        default: {
            return state
        }
    }
}