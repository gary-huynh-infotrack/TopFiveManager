import React from 'react';
export default class Filterbar extends React.Component {

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
                <form className="form-horizontal">
                    <div className="row"> 
                        <div className="col-md-2">
                            <select className="form-control" name="status">
                                <option>Filter by status</option>
                                <option>Active</option>
                                <option>Complete</option>
                                <option>On Hold</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-control" name="department">
                                <option>Filter by department</option>
                                <option>Development</option>
                                <option>Marketing</option>
                                <option>HelpDesk</option>
                                <option>Property Services</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <select className="form-control">
                                <option>Filter by team</option>
                                <option>Wayne - Development</option>
                                <option>Keith Development</option>
                                <option>Ira - Development</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group m-b">
                                <input type="text" className="form-control" />
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-primary">Search</button> 
                                </span> 
                            </div>
                        </div>
                    </div>
                </form>    
        )
    }
}