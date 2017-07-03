import React from 'react';


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
                        <h5>Update Top</h5>
                        <div className="ibox-tools"><button type="button" className="btn btn-xs btn-primary"><i className="fa fa-arrow-left"></i>  Back</button></div>
                    </div>
                    <div className="ibox-content">
                        <form className="form-horizontal">

                            <div className="form-group">
                                <label className="col-md-3 control-label">Department</label>
                                <div className="col-md-5">
                             
                                    <select type="text" className="form-control">
                                        <option>Select a department..</option>
                                        <option>Development</option>
                                        <option>Finance</option>
                                        <option>Accounting</option>
                                        <option>Operations</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Title</label>
                                <div className="col-md-5">
                                    <input type="text" placeholder="Type a title.." className="form-control" />
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Description</label>
                                <div className="col-md-5">
                                    <textarea type="text" placeholder="Type a description.." className="form-control"></textarea>
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Status</label>
                                <div className="col-md-5">
                                    <select type="text" className="form-control">
                                        <option>Select a status..</option>
                                        <option>Under Assessment</option>
                                        <option>To Do</option>
                                        <option>In Progress</option>
                                        <option>Done</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-4">
                                        <button type="button" className="btn btn-default pull-right">Cancel</button>
                                    </div>

                                    <div className="col-md-4">
                                        <button type="button" className="btn btn-primary pull-right">Save</button>
                                    </div>
                                 </div>
                            </div>

                        </form>
                    </div> 

                    
                </div>
            </div>
        )
    }
}