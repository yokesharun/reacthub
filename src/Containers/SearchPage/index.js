import React, { Component } from 'react';
import './style.css';

export default class SearchPage extends Component {

	constructor(props){
		super(props);
		this.state = {
			query : this.props.match.params.query,
			loading: false
		}
	}

	render() {
		return (
			<div>
				<h1>search results for { this.state.query }</h1>
			</div>
		);
	}
}