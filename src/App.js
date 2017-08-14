import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Matrix from './components/Matrix';

/* global FCMPlugin */
class App extends Component {

	componentDidMount() {

		document.addEventListener('deviceready', () => {
			FCMPlugin.onTokenRefresh(function (token) {
				console.log(token);
			});

			FCMPlugin.getToken(function (token) {
				console.log(token);
			});

			FCMPlugin.subscribeToTopic('general');

			FCMPlugin.onNotification(function (data) {
					alert(JSON.stringify(data));
			});
		});
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<Matrix/>
			</div>
		);
	}
}

export default App;
