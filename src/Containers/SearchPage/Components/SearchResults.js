import React from "react";
import { Item, Label, Loader, Image } from "semantic-ui-react";

export const SearchRepoItems = props => {
	return (
		<div>
			<h1 className="search-result-info">
				{props.searchRepoData && props.searchRepoData.total_count}{" "}
				repository results for {props.query}
			</h1>
			{props.searchRepoData.items &&
				props.searchRepoData.items.map(item => {
					return (
						<Item.Group divided key={item.id}>
							<Item>
								<Item.Content>
									<Item.Header as="a">
										{item.full_name}
									</Item.Header>
									<Item.Meta>{item.description}</Item.Meta>
									<Item.Description>
										<Label color="grey" horizontal>
											Open Issues {item.open_issues_count}
										</Label>
										<Label color="grey" horizontal>
											Watchers {item.watchers_count}
										</Label>
										<Label color="grey" horizontal>
											Forks {item.forks_count}
										</Label>
									</Item.Description>
									<Item.Extra>
										Created at : {item.created_at}
									</Item.Extra>
									<Item.Extra>
										<Label as="a" color="yellow">
											{item.language
												? item.language
												: "Not Defined"}
										</Label>
									</Item.Extra>
								</Item.Content>
							</Item>
						</Item.Group>
					);
				})};
		</div>
	);
};

export const SearchUserItems = props => {
	return (
		<div>
			<h1 className="search-result-info">
				{props.searchUserData && props.searchUserData.total_count} user
				results for {props.query}
			</h1>
			{props.searchUserData.items &&
				props.searchUserData.items.map(item => {
					return (
						<Item.Group divided key={item.id}>
							<Item>
								<Item.Content>
									<div>
										<Image src={item.avatar_url} avatar />
										<Item.Header as="a">
											{item.login}
										</Item.Header>
									</div>
									<Item.Meta>{item.description}</Item.Meta>
									<Item.Description>
										<Label color="grey" horizontal>
											Score {item.score}
										</Label>
									</Item.Description>
									<Item.Extra>
										Repo ->
										<a href={item.repos_url}>
											{item.repos_url}
										</a>
										<br />
										Followers ->
										<a href="{item.followers_url}">
											{item.followers_url}
										</a>
									</Item.Extra>
								</Item.Content>
							</Item>
						</Item.Group>
					);
				})};
		</div>
	);
};

export const SearchIssueItems = props => {
	return (
		<div>
			<h1 className="search-result-info">
				{props.searchIssueData && props.searchIssueData.total_count}{" "}
				issue results for {props.query}
			</h1>
			{props.searchIssueData.items &&
				props.searchIssueData.items.map(item => {
					return (
						<Item.Group divided key={item.id}>
							<Item>
								<Item.Content>
									<Item.Header as="a">
										{item.title}
									</Item.Header>
									<Item.Meta>{item.description}</Item.Meta>
									<Item.Description>
										<Label color="grey" horizontal>
											State {item.state}
										</Label>
										<Label color="grey" horizontal>
											Score {item.score}
										</Label>
									</Item.Description>
									<Item.Extra>
										Created at : {item.created_at}
									</Item.Extra>
									<Item.Extra>
										URL ->
										<a href={item.url}>{item.url}</a>
										<br />
									</Item.Extra>
								</Item.Content>
							</Item>
						</Item.Group>
					);
				})};
		</div>
	);
};
