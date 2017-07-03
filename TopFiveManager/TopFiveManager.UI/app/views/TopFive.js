import React from 'react';
import HomeLink from '../containers/HomeLink'
class TopFive extends React.Component {

    render() {
        return (

            <div className="wrapper wrapper-content animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>
                            Top Five Manager
                        </h1>
                        <HomeLink/>
                    </div>
                </div>
            </div>


            
        )
    }

}

export default TopFive