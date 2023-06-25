import { createStore } from 'redux';

const initialState = {
    fetchData: null,
};

function reducer(state = initialState, action){
    if(action.type === "fetchData"){
        return {
            ...state,
            fetchData: action.payload.data
        }
    }
    return state;
}

export const store = createStore(reducer, initialState);