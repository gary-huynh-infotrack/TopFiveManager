import React from 'react';
export default class Addform extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newTopFive: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
            </form>    
            </div>
        )
    }
}