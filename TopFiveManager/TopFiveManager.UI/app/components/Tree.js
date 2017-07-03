import React from 'react';
import SortableTree from 'react-sortable-tree';

export default class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.updateSortableTree = this.updateSortableTree.bind(this)
    }

    componentDidMount(){
        this.props.getAllHierarchy()
    }

    updateSortableTree(data){
        this.props.updateTierStore(data)
    }

    renderSortableTree(){
        var { list } = this.props
        return (
            <SortableTree
                treeData={list}
                onChange={treeData => this.updateSortableTree(treeData)}
            />
        )
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
                        <div id="treeWrapper" style={{width: '100%', height: '600px'}}> 
                            {this.renderSortableTree()}                           
                        </div>
                    </div>
                </div>
     
            </div>
        )
    }
}