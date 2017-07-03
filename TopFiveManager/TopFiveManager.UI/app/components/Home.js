import React from 'react';

import Addform from './Addform'
import Filterbar from './Filterbar'
import TableviewLink from '../containers/TableviewLink'
import ProgressRingLink from '../containers/ProgressRingLink'
import Modal from '../containers/ModalLink'

export default class Home extends React.Component {

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
                <div id="myModal" className="modal fade" role="dialog">
                    <Modal/>
                </div>
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Top 5's</h5>
                        <div className="ibox-tools"><button type="button" className="btn btn-xs btn-primary">Add Top 5</button></div>
                    </div>
                    <div className="ibox-content">                   
                        <Filterbar/>         
                        <TableviewLink />                 
                    </div>    
                </div>



            </div>
        )
    }
}