import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRepo } from './actions.js';
import { Input, Menu, Grid, Item, Label, Loader } from 'semantic-ui-react';
import './style.css';

class SearchPage extends Component {

	constructor(props){
		super(props);
		this.state = {
			query : this.props.match.params.query,
			activeItem: 'repos',
			loading: false,
		};
	}

	componentDidMount(){
		this.props.searchRepo(this.state.query);
	}

	handleItemClick(e, { name }){
		this.setState({ activeItem: name });
	}	
	
	render() {

		const { activeItem } = this.state;

		const MenuBar = () => (
			<Menu>
				<Menu.Item header className="nav-bar-header">ReactHub</Menu.Item>
				<Menu.Menu position="left" className="search-input-top">
					<Menu.Item>
						<Input 
							icon="search" 
							defaultValue={this.props.match.params.query} 
							onChange={(e)=>this.setState({query: e.target.value})}
							placeholder='Search...' />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);

		const SideBar = () => (
			<Menu pointing vertical className="search-sidebar">
				<Menu.Item name='repos' active={activeItem === 'repos'} onClick={this.handleItemClick} />
				<Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick} />
				<Menu.Item name='issues' active={activeItem === 'issues'} onClick={this.handleItemClick} />
			</Menu>
		);

		const SearchItems = () => { 
			return (
				<div>
					{this.props.data ? (
						this.props.data.items.map((item) => {
							return (
								<Item.Group divided key={item.id}>
								    <Item>
								      <Item.Content>
								        <Item.Header as='a'>{item.full_name}</Item.Header>
								        <Item.Meta>{item.description}</Item.Meta>
								        <Item.Description>
								        	<Label color='grey' horizontal>
										        Open Issues {item.open_issues_count}
										    </Label>
										    <Label color='grey' horizontal>
										        Watchers {item.watchers_count}
										    </Label>
										    <Label color='grey' horizontal>
										        Forks {item.forks_count}
										    </Label>
								        </Item.Description>
								        <Item.Extra>Created at : {item.created_at}</Item.Extra>
								        <Item.Extra>
								        	<Label as='a' color='yellow'>
										      {item.language ? item.language : 'Not Defined'}
										    </Label>
						    			</Item.Extra>
								      </Item.Content>
								    </Item>
								</Item.Group>
							);
						})
					) : (
						<Loader active inline />
					)
					}
				</div>
			);
		};

		return (
			<div>
				<MenuBar />
				<Grid columns='equal'>
					<Grid.Column className="search-col-left" width={4}>
						<SideBar />
					</Grid.Column>
					<Grid.Column className="search-col-right" width={12}>
						<h1 className="search-result-info">{this.props.data && this.props.data.total_count} repository results for { this.state.query }</h1>
						<SearchItems />
				    </Grid.Column>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.searchRepo
	};
};

const mapDispatchToProps = (dispatch) => ({
	searchRepo: (query) => dispatch(searchRepo(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
