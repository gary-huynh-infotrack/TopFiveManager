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
            <li onClick={() => this.complete(data+index)} key={index}>{data}</li>
        )
    }

    topFiveList(props) {
        const listItems = props.map((data, index) => this.topFiveRow(data,index)

        )
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
                <input
                    type="text"
                    value={this.state.newTopFive}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Write a comment..." />
                    
                <button onClick={(e) => this.handleSubmit(e)} 
                    type="submit">
                    Add
                </button>
                <button onClick={(e) => this.handleGet(e)} 
                    type="submit">
                    Get
                </button>             
                <p>John Citizen</p>
                {this.topFiveList(list)}
            </div>
        )
    }
}