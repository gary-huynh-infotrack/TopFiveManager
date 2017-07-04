import React from 'react';
export default class Tableview extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newTopFive: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.getTopFives(1)
        this.props.getTopFiveList() 
    }

    handleClick(data,index){
        this.props.selectedTopFive(data.id)
    }

    topFiveRow(data, index) {
        var status = ""
        switch (data.statusId){
            case(1):
                status = "Active"
                break;
            case(2):
                status = "Complete"
                break;
            case(3):
                status = "Cancelled"
                break;
            default:
                status = "On Hold"
                break;
        }
        return (
            <tr data-toggle="modal" data-target="#myModal" onClick={() =>this.handleClick(data, index)} key={data+index} >
                <td>{data.name}</td>
                <td> {data.description}</td>
                <td>{status}</td>
            </tr>  
        )
    }



    topFiveBlock(props){
        const listItems = props.topFives.map((data,index) =>  this.topFiveRow(data,index)) 
        return listItems
    }

    topFiveList(props) {
        const listItems = props.map((data, index) => (
            <div key= {'list-'+data+index} >
            <h3>{data.firstName + ' ' +data.lastName}</h3>
            <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.topFiveBlock(data)}                     
                    </tbody>
            </table>
            <br/>
            </div>
        ))
        return listItems
    }
    render() {
        var { list } = this.props;
        return (     
            <div>
                {this.topFiveList(list)}
            </div>
        )
    }
}