import { combineReducers } from 'redux';

var initialState = [];


function populateState(state,payload){
    var minify = payload.map( row => ({
        "name": row.name,
        "description": row.description,
        "status": row.statusId
    }))

    return minify;
}

function personal(state = initialState, action) {
    switch (action.type) {
        case "ADD": 
            return  [...state, action.payload]      
        case "COMPLETE":
            return [...state, action.payload]     
        case "POPULATE_STATE":
            return populateState(state, action.payload)
        default:
            return state
    };
};

const App = combineReducers({
    personal,
})
export default App;