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
    }

    handleClick(data,index){
        this.props.selectedTopFive(data.id)
    }

    topFiveRow(data, index) {
        var status = ""
        switch (data.status){
            case(1):
                status = "Active"
            case(2):
                status = "Complete"
            case(3):
                status = "Cancelled"
            default:
                status = "On Hold"
        }
        return (
            <tr data-toggle="modal" data-target="#myModal" onClick={() =>this.handleClick(data, index)} key={data+index} >
                <td>{data.name}</td>
                <td> {data.description}</td>
                <td>{status}</td>
            </tr>  
        )
    }


    topFiveList(props) {
        const listItems = props.map((data, index) => this.topFiveRow(data,index))
        return listItems
    }
    
        render() {
        var { list } = this.props;
        return (     
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.topFiveList(list)}                     
                </tbody>
            </table>
        )
    }
}