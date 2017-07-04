import React from 'react';


export default class UpdateTopFive extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            assignees:[0]
        }

        this.onChange = this.onChange.bind(this)
    }

    complete(id) {
        this.props.complete(id);
    }

    onChange(x) {
        console.log(x)
        var state = this.state.assignees
        state[x] = 1
        state.push(0);
        console.log(state)
        this.setState = {
            assignee: state
       }
    }

    componentDidMount(){
        var { list, selected } = this.props;
        var content = list.find(title => title.id == selected)
        if (content == null) return
        console.log(content)
        var{ department, title, status, description } = this.refs
        title.value = content.name
        description.value = content.description
        status.value = content.statusId
        department.value = content.departmentId
    }

    renderAssignee(x){
        console.log(x)
        return (
            <select type="text" className="form-control" key={"assignee-"+x} onChange={() =>this.onChange(x)}>
                <option value="0">Assign Top 5..</option>
                <option value="1">Greg Grondecki</option>
                <option value="2">Daniel Cai</option>
                <option value="3">Gary Huynh</option>
            </select>
        )
    }

    assignees(){
        console.log(this.state.assignees)
        var dom = this.state.assignees.map((x) => this.renderAssignee(x))
        return dom
    }

    render() {

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
                             
                                    <select type="text" className="form-control" ref="department">
                                        <option value="0">Select a department..</option>
                                        <option value="1">Development</option>
                                        <option value="2">Finance</option>
                                        <option value="3">Accounting</option>
                                        <option value="4">Operations</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Title</label>
                                <div className="col-md-5">
                                    <input type="text" placeholder="Type a title.." className="form-control" ref="title"/>
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Description</label>
                                <div className="col-md-5">
                                    <textarea type="text" placeholder="Type a description.." className="form-control" ref="description"></textarea>
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Status</label>
                                <div className="col-md-5">
                                    <select type="text" className="form-control" ref="status">
                                        <option value="0">Select a status..</option>
                                        <option value="1">Active</option>
                                        <option value="2">Complete</option>
                                        <option value="3">Cancelled</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Assignee</label>
                                <div className="col-md-5">
                                    {this.assignees()}
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