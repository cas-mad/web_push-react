import * as React from 'react';

export default (props) => (
	<div>
		{props.messages.map(m => <div>{m}</div>)}
	</div>
);