import React from 'react';
import TreeLink from '../containers/TreeLink'
class TreeView extends React.Component {
    render() {
        return (

            <div className="wrapper wrapper-content animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">
                        <TreeLink/>
                    </div>
                </div>
            </div>     
        )
    }

}

export default TreeView