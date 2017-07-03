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
            <div className="row"> 
                <div className="col-md-2">
                <h3>John Citizen</h3>
                </div>
                <div className="col-md-10">
                <form className="form-inline">
                <div className="form-group">
                <label htmlFor="department">By Department</label>
                <select className="form-control" name="department">
                    <option></option>
                    <option>Development</option>
                    <option>Marketing</option>
                    <option>HelpDesk</option>
                    <option>Property Services</option>
                </select>
                <label htmlFor ="team">By Team</label>
                <select className="form-control col-md-4" name="team">
                    <option></option>
                    <option>Daniel</option>
                    <option>Gary</option>
                    <option>Greg</option>
                </select>
                </div>
                </form>
                </div>
            </div>
        )
    }
}