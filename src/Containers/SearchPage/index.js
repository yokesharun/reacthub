import React, { Component } from 'react';
import { Input, Menu, Grid, Segment, Item, Image, Label } from 'semantic-ui-react';
import './style.css';

export default class SearchPage extends Component {

	constructor(props){
		super(props);
		this.state = {
			query : this.props.match.params.query,
			activeItem: 'repos',
			loading: false
		}
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {

		const { activeItem } = this.state;

		const MenuBar = () => (
			<Menu>
				<Menu.Item header className="nav-bar-header">ReactHub</Menu.Item>
				<Menu.Menu position='left' className="search-input-top">
					<Menu.Item>
						<Input icon='search' value={this.state.query} placeholder='Search...' />
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

		const ItemExampleItems = () => (
		  <Item.Group divided>
		    <Item>
		      <Item.Content>
		        <Item.Header as='a'>Header</Item.Header>
		        <Item.Meta>Description</Item.Meta>
		        <Item.Description>
		        	<Label color='grey' horizontal>
				        Fruit
				      </Label>
				      <Label color='grey' horizontal>
				        Fruit
				      </Label>
				      <Label color='grey' horizontal>
				        Fruit
				      </Label>
		        </Item.Description>
		        <Item.Extra>Updated at : 23th June 2018</Item.Extra>
		        <Item.Extra>
		        	<Label as='a' color='yellow'>
				      Javascript
				    </Label>
    			</Item.Extra>
		      </Item.Content>
		    </Item>

		    <Item>
		      <Item.Content>
		        <Item.Header as='a'>Header</Item.Header>
		        <Item.Meta>Description</Item.Meta>
		        <Item.Description>
		        </Item.Description>
		        <Item.Extra>Additional Details</Item.Extra>
		      </Item.Content>
		    </Item>
		  </Item.Group>
		);

		return (
			<div>
				<MenuBar />
				<Grid columns='equal'>
					<Grid.Column className="search-col-left" width={4}>
						<SideBar />
					</Grid.Column>
					<Grid.Column className="search-col-right" width={12}>
						<h1 class="search-result-info">526,872 repository results for { this.state.query }</h1>
						<ItemExampleItems />
				    </Grid.Column>
				</Grid>
			</div>
		);
	}
}