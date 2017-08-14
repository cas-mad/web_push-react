import * as React from 'react';
import {PureComponent} from 'react';
import MatrixField from './MatrixField';

export default class Matrix extends PureComponent {
	render() {
		const content = [];
		for (let i = 0; i < 10000; i++)
			content.push(<MatrixField key={i}/>);

		return <div>{content}</div>;
	}
}