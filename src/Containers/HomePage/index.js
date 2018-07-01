import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import './style.css';

export default class HomePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			query : '',
			submit: false
		};
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit() {
		if(this.state.query !== ''){
			this.setState({ submit : true });
		}
	}

	render() {

		if (this.state.submit === true) {
	    	return <Redirect to={'/search/' + this.state.query} />;
	    }

		return (
			<div className="main-container">
				<h1>ReactHub</h1>
				<p>Github - Searches, Repositories, Gists, Users, Issues all together.</p>
				<Form onSubmit={ () => this.handleSubmit() }>
					<Input name="query" onChange={ e => this.onChange(e) } icon="search" placeholder="Search hub items here" className="search-bar" />
				</Form>
			</div>
		);
	}
}