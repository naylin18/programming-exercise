import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { countries } from '../data';

class App extends Component{
	constructor() {
		super()
		this.state = {
			data: countries,
			searchfield: '',
			route: false
		}
	}

	onSearchChange = (event) => {	
		this.setState({ searchfield: event.target.value})
	}
	
	render() {
		const {data, searchfield} = this.state;
		const filteredData = data.filter(country => {
			return country.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !data.length ?
			<h1>Loading</h1> :
			(

				<div className='tc'>
						<div>
							<h1 className='f1'>Diet Data</h1>
							<SearchBox searchChange={this.onSearchChange}/>
							<Scroll>
								<CardList countries={filteredData}/>
							</Scroll>
						</div>
				</div>
			);
		}
}

export default App;