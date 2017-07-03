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
        console.log(content)
        var s = new Date(content.thirdStartDate);
        var f = new Date(content.thirdEndDate);
        var dateStart = `${s.getDate()}/${s.getMonth()+1}/${s.getFullYear()}`
        var dateFinish = `${f.getDate()}/${f.getMonth()+1}/${f.getFullYear()}`
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{content.name}</h4>
                </div>
                <div className="modal-body">
                    <p>{content.description}</p>
                    <p>{content.departmentName}</p>
                    <p>{content.statusId}</p>
                    <p>{dateStart} - {dateFinish}</p>
                    <p>relates to:</p>                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal">Edit</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal">Complete</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        )
    }
}