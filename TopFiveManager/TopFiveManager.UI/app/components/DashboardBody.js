import React from 'react';
import ProgressRingLink from '../containers/ProgressRingLink'

import {Doughnut} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Radar} from 'react-chartjs-2';

export default class DashboardBody extends React.Component {

    constructor(props) {
        super(props)
    }

    data = {
	labels: [
		'Completed',
		'On Hold',
		'Not started'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#a3e1d4',
		'#9cc3da',
		'#dedede'
		],
		hoverBackgroundColor: [
		'#a3e1d4',
		'#9cc3da',
		'#dedede'
		]
	}]
    };

    data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
        label: 'Top 5s completed date',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

data3  = {
  labels: ['Product', 'Customer Experience', 'Revenue', 'Client Base', 'Maintainence', 'Feature'],
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59,10, 81, 56, 55]
    }
  ]
};

    render() {
        //var { list } = this.props;
        return (
            <div className="body">
                            <div className="row">
                <div className="col-lg-4">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-success pull-right">All Top 5s</span>
                            <h5>Total</h5>
                        </div>
                        <div className="ibox-content">     
                            <Doughnut data={this.data} />                     
                        </div>
                    </div>            
                </div>
                <div className="col-lg-4">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-success pull-right">All Top 5s</span>
                            <h5>By Department</h5>
                        </div>
                        <div className="ibox-content">     
                            <Doughnut data={this.data} />                     
                        </div>
                    </div>            
                </div>
                <div className="col-lg-4">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-success pull-right">All Top 5s</span>
                            <h5>By Team</h5>
                        </div>
                        <div className="ibox-content">     
                            <Doughnut data={this.data} />                     
                        </div>
                    </div>            
                </div>
            </div>
            <div className="row">
            <div className="col-lg-8">
                <div className="ibox float-e-margins">
                    <div className="ibox-content">
                        <div>
                            <span className="pull-right text-right">
                            <small>Average value of sales in the past month in: <strong>United states</strong></small>
                                <br/>
                                All sales: 162,862
                            </span>
                            <h2 className="no-margins">
                                All Top 5's
                            </h2>
            
                        </div>
                        <div className="m-t-sm">
                            <div className="row">
                                <div className="col-md-8">
                       
                                    <Line data={this.data2} />                                
                                </div>
                                <div className="col-md-4">
                                    <ul className="stat-list m-t-lg">
                                        <li>
                                            <h2 className="no-margins">2,346</h2>
                                            <small>Total orders in period</small>
                                            <div className="progress progress-mini">
                                                <div className="progress-bar"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <h2 className="no-margins ">4,422</h2>
                                            <small>Orders in last month</small>
                                            
                                            <div className="progress progress-mini">
                                                <div className="progress-bar"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            
            </div>
            <div className="col-lg-4">
                <div className="ibox float-e-margins">
                     <div className="ibox-title">
                        <h3>Distribution by Label</h3>
                        <div className="ibox-content">
                            <Radar data={this.data3}/>
                     </div>
                </div>
                </div>
            </div>
            </div>

        </div>
        )
    }
}