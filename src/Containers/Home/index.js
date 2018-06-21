import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import './style.css';

export default class Home extends Component {
	render() {
		return (
			<div className="main-container">
				<h1>ReactHub</h1>
				<p>Github - Searches, Repositories, Gists, Users, Issues all together.</p>
				<Input icon='search' placeholder='Search hub items here' className="search-bar" ></Input>
			</div>
		);
	}
}