import { FETCH_STOCK } from '../actions/index';

export default function(state=[], action){
    switch(action.type) {
        case FETCH_STOCK:
            return [ action.payload.data.Elements[0], ...state];
    }
    return state;
}