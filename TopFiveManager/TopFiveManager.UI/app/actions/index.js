import axios from 'axios'
import thunk from 'redux-thunk';

export function getTopFives(id){
    return (dispatch) => {  
        return callFetch(id)
            .then(response => {
                return response.data
            })
            .then(success => {
                dispatch(updateStore(success))        
            })
            .catch(error => dispatch(errorSomething(error)))
            .then(()=>dispatch(spinning(false)))
    }
}

export function add(list) {
    return {
        type: "ADD",
        payload: list
    } 
}

export function completeTask(id){
       return {
        type: "COMPLETE",
        payload: id
    }  
}

export function spinning(bool){
    return {
        type: 'SPINNING',
        show:bool
    }
}

function callFetch(id){
    var baseUrl = 'localhost:61222';
    var relativeUrl = 'api/topfives'
    var url = `${baseUrl}/{relativeUrl}/GetMyTopFives/${id}`
    url = "https://jsonplaceholder.typicode.com/posts/1"
    var res = axios.get(url)
    return res;
}

function updateStore(data){
    try{
    console.log(data)
    var string = JSON.stringify(data)
    } catch (ex){
        console.log(ex);
    }
 
    string = []
    return {
        type: 'POPULATE_STATE',
        payload: string
    }
}


function errorSomething(error){
    console.log(error)
    return {
        type:'ERROR_SOMETHING'
    }
}

