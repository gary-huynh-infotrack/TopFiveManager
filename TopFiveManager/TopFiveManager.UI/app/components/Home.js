import React from 'react';

import Addform from './Addform'
import Filterbar from './Filterbar'
import TableviewLink from '../containers/TableviewLink'
import ProgressRingLink from '../containers/ProgressRingLink'

export default class Home extends React.Component {

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
            
                <Filterbar/>
                <div className="row">
                <TableviewLink />

  
               </div>
            </div>
        )
    }
}