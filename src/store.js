import { createStore } from 'redux';

const initialState = {
    fetchData: null,
    counter: 0
};

function reducer(state = initialState, action){
    switch(action.type){
        case "fetchData": return {...state, fetchData: action.payload.data};
        case "counter": return {...state, counter: state.counter + 1};
        case "signOut": return {...initialState};
        default: return state;
    }
}

export const store = createStore(reducer, initialState);