import React from 'react';

import Addform from './Addform'
import Select from 'react-select';
import Multiselect from './common/Multiselect'
import { withRouter } from 'react-router'

class AddTopFive extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)  
        this.handleChange = this.handleChange.bind(this)
        this.onSave = this.onSave.bind(this);
    }

    commentList(){
        var { comments } = this.props
                    
    }

    handleSubmit(e) {
        //this.props.addCommentRow(this.state.comment)
        this.setState({ comment : ''})    
    }

    handleChange(e) {
        this.setState({ comment : e.target.value})    
    }

    onSave(){
        var obj = {
            Name: "hello",
            Description: "test",
            ParentId: 13,
            AuthorId: 1,
            StatusId: 1,
            DepartmentId: 1
        }
            
        let data = Object.keys(obj).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
        }).join('&')

        this.props.addNewTopFive(data)
        this.props.router.push('/treeview')
        console.log('save');
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
                                        <option>Active</option>
                                        <option>Complete</option>
                                        <option>Cancel</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group"><label className="col-md-3 control-label">Assignee</label>
                                <div className="col-md-5">
                                    <select type="text" className="form-control">
                                        <option>Greg Grondecki</option>
                                        <option>Daniel Cai</option>
                                        <option>Gary Huynh</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-4">
                                        <button type="button" className="btn btn-default pull-right">Cancel</button>
                                    </div>

                                    <div className="col-md-4">
                                        <button onClick={() => this.onSave()} type="button" className="btn btn-primary pull-right">Save</button>
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


export default withRouter(AddTopFive)
/*

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
*/