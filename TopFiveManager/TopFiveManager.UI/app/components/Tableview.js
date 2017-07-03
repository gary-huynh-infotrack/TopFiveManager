import React from 'react';
export default class Tableview extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newTopFive: ""
        }
    }

    componentDidMount(){
        this.props.getTopFives(1)
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
            <tr key={data+index} className= { status== "On Hold" ? "success" : ""}>
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