import * as React from 'react';
import {PureComponent} from 'react';

export default class MatrixField extends PureComponent {
	constructor() {
		super();
		this.state = {isSelected: false};
	}

	onClick = () => {
		this.setState({...this.state, isSelected: !this.state.isSelected});
	};

	render() {
		return <div
			onClick={this.onClick}
			style={{
				height: 15,
				width: 15,
				border: '1px solid grey',
				display: 'block',
				float: 'left',
				background: this.state.isSelected ? 'red' : 'transparent'
			}}
		/>;
	}
}