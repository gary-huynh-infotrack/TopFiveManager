import React from 'react';

import Addform from './Addform'
import Filterbar from './Filterbar'
import TableviewLink from '../containers/AddTopFiveLink'

export default class AddTopFive extends React.Component {

    constructor(props) {
        super(props)
    }

    complete(id) {
        this.props.complete(id);
    }

    render() {
        var { list } = this.props;
        return (

            <div className="body">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Top 5's</h5>
                        <div className="ibox-tools"><button type="button" className="btn btn-xs btn-primary">Add Top 5</button></div>
                    </div>
                    <div className="ibox-content">
                        <Filterbar/><br />
                        <div className="row">
                            <TableviewLink />
                        </div>
                    </div>
                </div>
     
            </div>
        )
    }
}