import * as React from 'react';
import {PureComponent} from 'react';

export default class Matrix extends PureComponent {
	render() {
		return (
			<div>
				{this.props.messages.map(m => <div>{m}</div>)}
			</div>
		);
	}
}