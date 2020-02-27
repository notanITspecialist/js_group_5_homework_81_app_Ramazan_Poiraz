import {RES_SHORT} from "./store";

const initialState = {
    shortLink: '',
    error: null
};

const reducer = ( state = initialState, action ) => {
    if(action.type === RES_SHORT) {
        return {...state, shortLink: action.short}
    }

    return state
};

export default reducer