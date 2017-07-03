import React from 'react';
export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newTopFive: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.complete = this.complete.bind(this);
    }

    complete(id) {
        this.props.complete(id);
    }

    topFiveRow(data, index) {
        return (
            <tr>
                <td>{data.name}</td>
                <td> {data.description}</td>
                <td>{data.status}</td>
            </tr>  
        )
    }

    topFiveList(props) {
        console.log(props)
        const listItems = props.map((data, index) => this.topFiveRow(data,index))
        return listItems
    }

    handleChange(e) {
        this.setState({ newTopFive : e.target.value})    
    }

    handleSubmit(e) {
        console.log('hello')
        this.props.addRow(this.state.newTopFive)
        this.state.newTopFive = '';
    }

    handleGet(e){
        console.log('hanndle lget')
        this.props.getTopFives(1)
    }

    render() {
        var { list } = this.props;
        return (
            <div className="hello">
                <form className="form-horizontal">
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.newTopFive}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Write a comment..." />
                        
                    <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)} 
                        type="submit">
                        Add
                    </button>
                    <button className="btn btn-primary" onClick={(e) => this.handleGet(e)} 
                        type="submit">
                        Get
                    </button>   
                </form>          
                
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
                <h3>John Citizen</h3>
                <select className="form-control m-b" name="department">
                    <option></option>
                    <option>Development</option>
                    <option>Marketing</option>
                    <option>HelpDesk</option>
                    <option>Property Services</option>
                </select>

                <select className="form-control m-b" name="team">
                    <option></option>
                    <option>Daniel</option>
                    <option>Gary</option>
                    <option>Greg</option>
                </select>

            </div>
        )
    }
}