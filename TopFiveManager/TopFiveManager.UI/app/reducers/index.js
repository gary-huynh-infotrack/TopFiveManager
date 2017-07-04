import { combineReducers } from 'redux';

var initialState = [];


function populateState(state,payload){
    var minify = payload.map( row => ({
        "name": row.name,
        "description": row.description,
        "status": row.statusId,
        "id": row.id
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
            return action.payload
            //return populateState(state, action.payload)
        default:
            return state
    };
};

function hierarchy(state = initialState, action){
    switch (action.type){
        case 'POPULATE_TREE':
            return action.payload
        default:
            return state;
    }
}

var selectedInitialState = -1
function selected(state = selectedInitialState, action){
    switch(action.type){
        case 'SELECTED_TOPFIVE':
            return action.payload
        default: 
            return state;
    }
}

function comment(state = {}, action){
    switch(action.type){
        case 'ADD_ROW':
            return Object.assign({}, action.payload)
        default:
            return state;
    }
}

const App = combineReducers({
    personal,
    hierarchy,
    selected,
    comment
})
export default App;