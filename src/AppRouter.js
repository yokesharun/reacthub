import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Containers/HomePage";
import SearchPage from "./Containers/SearchPage";

export default class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/search/:query" component={SearchPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}
