import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRepo, searchUser, searchIssue } from "./actions.js";
import {
	SearchUserItems,
	SearchRepoItems,
	SearchIssueItems
} from "./Components/SearchResults";
import { Input, Menu, Grid, Loader } from "semantic-ui-react";
import "./style.css";

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: this.props.match.params.query,
			activeItem: "repos",
			loading: false
		};
	}

	componentDidMount() {
		this.props.searchRepo(this.state.query);
	}

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
		if (name === "repos" && this.props.searchRepoData.length === 0) {
			this.props.searchRepo(this.state.query);
		} else if (name === "users" && this.props.searchUserData.length === 0) {
			this.props.searchUser(this.state.query);
		} else if (
			name === "issues" &&
			this.props.searchIssueData.length === 0
		) {
			this.props.searchIssue(this.state.query);
		}
	};

	render() {
		const { activeItem } = this.state;
		const { searchRepoData, searchUserData, searchIssueData } = this.props;

		const MenuBar = () => (
			<Menu>
				<Menu.Item header className="nav-bar-header">
					ReactHub
				</Menu.Item>
				<Menu.Menu position="left" className="search-input-top">
					<Menu.Item>
						<Input
							icon="search"
							defaultValue={this.state.query}
							onChange={e =>
								this.setState({ query: e.target.value })
							}
							placeholder="Search for Repos, Issues, Users..."
						/>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);

		const SideBar = () => (
			<Menu pointing vertical className="search-sidebar">
				<Menu.Item
					name="repos"
					active={activeItem === "repos"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="users"
					active={activeItem === "users"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="issues"
					active={activeItem === "issues"}
					onClick={this.handleItemClick}
				/>
			</Menu>
		);

		return (
			<div>
				<MenuBar />
				<Grid columns="equal">
					<Grid.Column className="search-col-left" width={4}>
						<SideBar />
					</Grid.Column>
					<Grid.Column className="search-col-right" width={12}>
						{this.state.activeItem === "repos" &&
						searchRepoData.items ? (
							<SearchRepoItems
								searchRepoData={searchRepoData}
								query={this.state.query}
							/>
						) : this.state.activeItem === "users" &&
						searchUserData.items ? (
							<SearchUserItems
								searchUserData={searchUserData}
								query={this.state.query}
							/>
						) : this.state.activeItem === "issues" &&
						searchIssueData.items ? (
							<SearchIssueItems
								searchIssueData={searchIssueData}
								query={this.state.query}
							/>
						) : (
							<Loader active inline />
						)}
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchRepoData: state.searchRepo,
		searchUserData: state.searchUser,
		searchIssueData: state.searchIssue
	};
};

const mapDispatchToProps = dispatch => ({
	searchRepo: query => dispatch(searchRepo(query)),
	searchUser: query => dispatch(searchUser(query)),
	searchIssue: query => dispatch(searchIssue(query))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchPage);
