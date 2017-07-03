import { errorSomething, spinning, callFetch } from './common'
export function getAllHierarchy(){
    return (dispatch) => {  
        return callFetch(1)
            .then(response => {
                //return response.data
                return sampleTierData();
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

function callFetch(id){
    var baseUrl = 'localhost:61222';
    var relativeUrl = 'api/topfives'
    var url = `${baseUrl}/{relativeUrl}/GetMyTopFives/${id}`
    url = "https://jsonplaceholder.typicode.com/posts/1"
    var res = axios.get(url)
    return res;
}

export function updateTierStore(data){
    return {
        type: 'POPULATE_TREE',
        payload: data
    }
}