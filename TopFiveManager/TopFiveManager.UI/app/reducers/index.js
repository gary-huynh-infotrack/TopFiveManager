import { combineReducers } from 'redux';

var initialState = ['hello', 'two', 'tree'];

function personal(state = initialState, action) {
    switch (action.type) {
        case "ADD": 
            return  [...state, action.payload]      
        case "COMPLETE":
            return [...state, action.payload]     
        case "POPULATE_STATE":
            return action.payload  
        default:
            return state
    };
};

const App = combineReducers({
    personal,
})
export default App;