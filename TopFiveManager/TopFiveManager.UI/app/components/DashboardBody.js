import React from 'react';
import ProgressRingLink from '../containers/ProgressRingLink'

export default class DashboardBody extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        //var { list } = this.props;
        return (
            <div className="body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-success pull-right">All Top 5s</span>
                            <h5>Completed</h5>
                        </div>
                        <div className="ibox-content">
                            
                                <div className="col-md-4 text-center">
                                <ProgressRingLink 
                                    id={"d3-arc"} 
                                    foregroundColor={"#16a9fa"}
                                    percentComplete={0.11}/>
                                </div>
                                <div className="col-md-4 text-center">
                                <ProgressRingLink 
                                    id={"d3-arc2"} 
                                    foregroundColor={"#4dbec4"}
                                    percentComplete={0.51}/>   
                                </div>
                                <div className="col-md-4 text-center">
                                <ProgressRingLink 
                                    id={"d3-arc3"} 
                                    foregroundColor={"#b270b4"}
                                    percentComplete={0.51}/> 
                                </div>
                                <h1 className="no-margins">24/50</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}