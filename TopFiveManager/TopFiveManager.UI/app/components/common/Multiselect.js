import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class MultiSelectField extends React.Component{
    constructor(props){
        super(props)
    }
	componentDidMount(){
		const el = findDOMNode(this.refs.selection);

	}
	render () {
		var style = {
			width:350
		}
		return (
			<div className="form-group">
				<select className= "form-control" id="selection" multiple="multiple" ref="selection">
				<option value="cheese">Cheese</option>
				<option value="tomatoes">Tomatoes</option>
				<option value="mozarella">Mozzarella</option>
				<option value="mushrooms">Mushrooms</option>
				<option value="pepperoni">Pepperoni</option>
				<option value="onions">Onions</option>
			</select>
			</div>
		);
	}
};