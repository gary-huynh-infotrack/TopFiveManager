import axios from 'axios'
import thunk from 'redux-thunk';


export function getTopFives(id){
    return (dispatch) => {  
        return callFetch(id)
            .then(response => {
                //return response.data
                return sampleData();
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

function sampleData(){
   return [
  {
    "id": 1,
    "name": "Top 5 Manager",
    "description": "Implement the Top 5 Manager",
    "parentId": 0,
    "thirdId": 1,
    "thirdStartDate": "2017-07-01T00:00:00",
    "thirdEndDate": "2017-10-31T23:59:59",
    "creationDate": "2017-07-03T12:22:31",
    "authorId": 1,
    "statusId": 1,
    "departmentId": 1,
    "departmentName": null
  },
  {
    "id": 2,
    "name": "Front end",
    "description": "Implement the front end Top 5 Manager",
    "parentId": 1,
    "thirdId": 1,
    "thirdStartDate": "2017-07-01T00:00:00",
    "thirdEndDate": "2017-10-31T23:59:59",
    "creationDate": "2017-07-03T12:22:31",
    "authorId": 1,
    "statusId": 1,
    "departmentId": 1,
    "departmentName": null
  },
  {
    "id": 3,
    "name": "Back end",
    "description": "Implement the back end Top 5 Manager",
    "parentId": 1,
    "thirdId": 1,
    "thirdStartDate": "2017-07-01T00:00:00",
    "thirdEndDate": "2017-10-31T23:59:59",
    "creationDate": "2017-07-03T12:22:31",
    "authorId": 1,
    "statusId": 1,
    "departmentId": 1,
    "departmentName": null
  },
  {
    "id": 5,
    "name": "DB",
    "description": "Implement the DB for the Top 5 Manager",
    "parentId": 3,
    "thirdId": 1,
    "thirdStartDate": "2017-07-01T00:00:00",
    "thirdEndDate": "2017-10-31T23:59:59",
    "creationDate": "2017-07-03T12:22:31",
    "authorId": 1,
    "statusId": 1,
    "departmentId": 1,
    "departmentName": null
  }
]
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

    } catch (ex){
        console.log(ex);
    }
    return {
        type: 'POPULATE_STATE',
        payload: data
    }
}


function errorSomething(error){
    console.log(error)
    return {
        type:'ERROR_SOMETHING'
    }
}

