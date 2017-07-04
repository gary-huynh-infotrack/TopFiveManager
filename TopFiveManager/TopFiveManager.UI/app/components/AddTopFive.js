import React from 'react';

import Addform from './Addform'
import Select from 'react-select';
import Multiselect from './common/Multiselect'

export default class AddTopFive extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)  
        this.handleChange = this.handleChange.bind(this)
    }

    commentList(){
        var { comments } = this.props
                    
    }

    handleSubmit(e) {
        console.log('hello')
        //this.props.addCommentRow(this.state.comment)
        this.setState({ comment : ''})    
    }

    handleChange(e) {
        console.log('changed')
        this.setState({ comment : e.target.value})    
    }


    render() {
        var { list } = this.props;
        return (

            <div className="body">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Add Top 5's</h5>
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
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Comment</h5>
                    </div>
                    <div className="ibox-content">
                            <div className="input-group m-b">
                                <input type="text" className="form-control" value={this.state.comment} onChange={this.handleChange}/>
                                <span className="input-group-btn">
                                    <button onClick={(e) => this.handleSubmit(e)}type="button" className="btn btn-primary" >Post</button> 
                                </span> 
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}