import axios from 'axios'
import thunk from 'redux-thunk';

var baseUrl = 'http://localhost:61222';

export function getAllHierarchy(){
    return (dispatch) => {  
        return GetHierarchy()
            .then(response => {
                return response.data
                //return sampleTierData();
            })
            .then(data => {  
                dispatch(updateTierStore(restructureTree(data)))        
            })
            .catch(error => dispatch(errorSomething(error)))
            .then(()=>dispatch(spinning(false)))
    }
}

export function updateTierStore(data){
    return {
        type: 'POPULATE_TREE',
        payload: data
    }
}

function recursiveTree(data){
    if (data == null) return
    var obj = {title:"", children:[]}
    obj.title = data.name + " - " + data.description
    if(data.children != null){
        for (var child of data.children)
            obj.children.push(recursiveTree(child))
    }   
    return obj
}

function restructureTree(data){
    return data.map(child => recursiveTree(child))
}

function sampleTierData(){
    return [{
    "id": 1,
    "name": "Top 5 Manager",
    "description": "Implement the Top 5 Manager",
    "parentId": null,
    "thirdId": 1,
    "thirdStartDate": "2017-07-01T00:00:00",
    "thirdEndDate": "2017-10-31T23:59:59",
    "creationDate": "2017-07-03T12:22:31",
    "authorId": 1,
    "statusId": 1,
    "departmentId": 1,
    "departmentName": null,
    "children": [{
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
        "departmentName": null,
        "children": []
    }, {
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
        "departmentName": null,
        "children": [{
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
            "departmentName": null,
            "children": []
        }]
    }]
}]
}

export function getTopFiveByList(){
    return (dispatch) => {  
        return GetAllList()
            .then(response => {
                return response.data
            })
            .then(success => {
                dispatch(updateListStore(success))        
            })
            .catch(error => dispatch(errorSomething(error)))
            .then(()=>dispatch(spinning(false)))
    }
}


export function getTopFives(id){
    return (dispatch) => {  
        return GetAll()
            .then(response => {
                return response.data
                //return sampleData();
            })
            .then(success => {
                dispatch(updateStore(success))        
            })
            .catch(error => dispatch(errorSomething(error)))
            .then(()=>dispatch(spinning(false)))
    }
}

function updateStore(data){
    return {
        type: 'POPULATE_STATE',
        payload: data
    }
}

function updateListStore(data){
    return {
        type: 'POPULATE_STATE_LIST',
        payload: data
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

export function selectTopFive(id){
    return {
        type: "SELECTED_TOPFIVE",
        payload: id
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
    "departmentName": "Development"
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
    "statusId": 2,
    "departmentId": 1,
    "departmentName": "Development"
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
    "statusId": 3,
    "departmentId": 1,
    "departmentName": "Marketing"
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
    "statusId": 4,
    "departmentId": 1,
    "departmentName": "Operations"
  }
]
}
export function errorSomething(error){
    console.log(error)
    return {
        type:'ERROR_SOMETHING'
    }
}

export function spinning(bool){
    return {
        type: 'SPINNING',
        show:bool
    }
}

export function GetAll(id){
    var relativeUrl = 'api/Assignments'
    var url = `${baseUrl}/${relativeUrl}/GetAll`

    var res = axios.get(url)
    return res;
}

export function GetAllList(){
    var relativeUrl = 'api/TopFives'
    var url = `${baseUrl}/${relativeUrl}`
    var res = axios.get(url)
    return res;
}

export function callFetch(id){
    var relativeUrl = 'api/topfives'
    var url = `${baseUrl}/${relativeUrl}/GetByEmployeeId/${id}`
    var res = axios.get(url)
    return res;
}


export function GetHierarchy(){
    var relativeUrl = 'api/topfives'
    var url = `${baseUrl}/${relativeUrl}/GetAllWithHierarchies`
    var res = axios.get(url)
    return res;
}

//add comments

export function addCommentRow(data){
    return {
        type: 'ADD_ROW',
        payload:data
    }
}