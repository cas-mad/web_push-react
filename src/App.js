import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NotificationList from './components/NotificationList';

/* global FCMPlugin */
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {messages: []};
	}

	componentDidMount() {
		console.log('App did mount');

		document.addEventListener('deviceready', () => {
			FCMPlugin.onTokenRefresh((token) => {
				console.log(token);
			});

			FCMPlugin.getToken((token) => {
				console.log(token);
			});

			FCMPlugin.subscribeToTopic('general');

			FCMPlugin.onNotification((data) => {
				this.setState({messages: [...this.state.messages, JSON.stringify(data)]})
			});
		});
	}

	componentDidUnmount() {
		console.log('App did unmount');
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<NotificationList messages={this.state.messages}/>
			</div>
		);
	}
}

export default App;
