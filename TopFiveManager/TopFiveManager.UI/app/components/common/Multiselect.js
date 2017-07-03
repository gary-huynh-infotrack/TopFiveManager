import React from 'react';
import Select from 'react-select';

const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));

export default class MultiSelectField extends React.Component{
    constructor(props){
        super(props);
        this.state = {			
            disabled: false,
			crazy: false,
			options: FLAVOURS,
			value: []
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.toggleDisabled = this.toggleDisabled.bind(this);
        this.toggleChocolate = this.toggleChocolate.bind(this);
    }
	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}
	toggleDisabled (e) {
		this.setState({ disabled: e.target.checked });
	}
	toggleChocolate (e) {
		let crazy = e.target.checked;
		this.setState({
			crazy: crazy,
			options: crazy ? WHY_WOULD_YOU : FLAVOURS,
		});
	}
	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select multi simpleValue 
                    disabled={this.state.disabled}                     
                    value={this.state.value} 
                    placeholder="Select your favourite(s)" 
                    options={this.state.options} 
                    className="my-class"
                    onChange={this.handleSelectChange} />
			</div>
		);
	}
};