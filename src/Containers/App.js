import React, { Component } from "react"
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox"
import Scroll from "../Components/Scroll"
import Grid from "../Components/Grid"
import { robots } from "../robots";
import "tachyons";
import "./App.css"

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [], 
			searchField: "",
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {return response.json()})
		.then(users => {this.setState({robots: users})})
	}

	onSearchChange = (event) =>{
		this.setState({ searchField: event.target.value});
		/*console.log(event.target.value);
		console.log(filteredRobots);*/
	}

	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		if (robots.length === 0){
			return(<h1>No Robots Available :(</h1>)
		}
		else{
			return(
			<div className="tc">
				<h1 className="tc f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Grid>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</Grid>
			</div>
		)
		}
	}
}

export default App;