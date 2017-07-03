import React from 'react';

export default class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg' } ] }],
        };
    }
    render() {
        return (
            <div className="body">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Overview</h5>
                        <div className="ibox-tools"><button type="button" className="btn btn-xs btn-primary">Add Top 5</button></div>
                    </div>
                    <div className="ibox-content">
                       
                    </div>
                </div>
     
            </div>
        )
    }
}