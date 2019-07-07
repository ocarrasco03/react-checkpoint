import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import SearchForm from './SearchForm';
import './App.css';

require('dotenv').config();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			q: '',
      limit: 20,
      loading: false,
      timeOut: 0,
			result: []
    };
    this.isLoading = false;
	}

	componentDidMount() {
		axios
			.get(
				`http://api.giphy.com/v1/gifs/search?q=${this.state.q}&api_key=Ij3bLFgqaqeq5ZPeyCzmkGgEH55yONE3&limit=${this.state
					.limit}`
			)
			.then((response) => {
				console.log(response);
				this.setState({ result: response.data });
			})
			.catch((e) => console.log(`Unable to fetch data: ${e}`));
	}

	updateState = (field) => (event) => {
		this.setState({
			[field]: event.target.value
		});
  };
  
  searchGif = (event) => {
    this.state({ loading: true });
    this.timeOut = setTimeout(() =>);
  }

	render() {
    console.log(this.state.q)
		return (
			<React.Fragment>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={8}>
						<SearchForm q={this.state.q} updateState={this.updateState} />
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default App;
