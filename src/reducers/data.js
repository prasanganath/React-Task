import { FETCH_USERS } from '../actions/types';

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};