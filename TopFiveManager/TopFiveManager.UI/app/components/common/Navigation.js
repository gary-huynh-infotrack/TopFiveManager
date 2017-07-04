import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';
// import logo from './images/infotrack_logo.png'
class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        /*
         <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>*/
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> 
                                <span>
                                    <img src="https://search.infotrack.com.au/Images/InfoTrackLogo_18px%20by%20216px.png" width="175" />
                                </span>
                               
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                TOP 5
                            </div>
                        </li>
                        <li className={this.activeRoute("/dashboard")}>
                            <Link to="/dashboard"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></Link>
                        </li>
                        <li className={this.activeRoute("/topfives")}>
                            <Link to="/topfives"><i className="fa fa-table"></i> <span className="nav-label">View Top 5</span></Link>
                        </li>
                        <li className={this.activeRoute("/treeview")}>
                            <Link to="/treeview"><i className="fa fa-tree"></i> <span className="nav-label">Tree View</span></Link>
                        </li>
                        <li className={this.activeRoute("/addtopfiveview")}>
                            <Link to="/addtopfiveview"><i className="fa fa-plus"></i> <span className="nav-label">Add New Top 5</span></Link>
                        </li>

                            
                    </ul>

            </nav>
        )
    }
}

export default Navigation