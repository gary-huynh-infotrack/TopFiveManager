import React from 'react';

import Addform from './Addform'
import Filterbar from './Filterbar'
import TableviewLink from '../containers/TableviewLink'
import ProgressRingLink from '../containers/ProgressRingLink'

export default class Modal extends React.Component {

    constructor(props) {
        super(props)
    }

    complete(id) {
        this.props.complete(id);
    }

    render() {

        var { selected, list } = this.props;
        if (selected == -1) return (
            <div className="modal-dialog">
            </div>
        )

        var content = list.find(title => title.id == selected)
        var s = new Date(content.thirdStartDate);
        var f = new Date(content.thirdEndDate);
        var dateStart = `${s.getDate()}/${s.getMonth()+1}/${s.getFullYear()}`
        var dateFinish = `${f.getDate()}/${f.getMonth()+1}/${f.getFullYear()}`
        var status = ""
        switch (content.statusId){
            case(1):
                status = "Active"
                break;
            case(2):
                status = "Complete"
                break;
            case(3):
                status = "Cancelled"
                break;
            default:
                status = "On Hold"
                break;
        }
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h3 className="modal-title">
                        {content.name} 
                    </h3>
                </div>
                <div className="modal-body">
                    <span className= {status=='Complete' ? "label label-success": "label"}>{status}</span>
                    <h4>{content.description}</h4>
                    <p>{content.departmentName}</p>
                    
                    <p>{dateStart} - {dateFinish}</p>
                    <p>relates to:</p>                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Edit</button>
                    <button type="button" className="btn btn-primary pull-left" data-dismiss="modal">Complete</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        )
    }
}