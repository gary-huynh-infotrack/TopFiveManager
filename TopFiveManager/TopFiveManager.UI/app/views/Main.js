import React from 'react';
import HomeLink from '../containers/HomeLink'

class Main extends React.Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
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

export default Main