import { SET_USERS, SET_USER } from "../types";

const initialState = {
    data: [],
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: return { ...state, data: action.payload };
        case SET_USER: return { ...state, user: action.payload };

        default: return state;
    }

}

export default reducer