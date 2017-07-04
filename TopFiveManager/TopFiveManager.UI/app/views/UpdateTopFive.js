import React from 'react';
import UpdateTopFiveLink from '../containers/UpdateTopFiveLink'
class UpdateTopFive extends React.Component {

    render() {
        return (
        <div>
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>Top 5 Manager</h2>
                    <ol className="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>    
                        <li className="active">
                            <strong>Top 5's</strong>
                        </li>
                        <li className="active">
                            <strong>Add</strong>
                        </li>
                    </ol>
                </div>
                <div className="col-lg-2">

                </div>
            </div>

            <div className="wrapper wrapper-content animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">                        
                        <UpdateTopFiveLink/>
                    </div>
                </div>
            </div>   
            </div>  
        )
    }

}

export default UpdateTopFiveLink