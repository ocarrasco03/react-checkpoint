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
      timeOut: null,
			result: []
    };
    this.isLoading = false;
    this.API_KEY = 'Ij3bLFgqaqeq5ZPeyCzmkGgEH55yONE3';
	}

	componentDidMount() {
		axios
			.get(
				`http://api.giphy.com/v1/gifs/search?q=${this.state.q}&api_key=&limit=${this.state
					.limit}`
			)
			.then((response) => {
				console.log(response);
				this.setState({ result: response.data });
			})
			.catch((e) => console.log(`Unable to fetch data: ${e}`));
  }
  
  searchGif = (event) => {
    this.state({ loading: true });
    clearTimeout(this.timeOut);
    let val = event.target.value;
    this.timeOut = setTimeout(() => {
      this.requestAPI(val);
    }, 500);
  }

	render() {
    console.log(this.state.q)
		return (
			<React.Fragment>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={8}>
						<SearchForm q={this.state.q} searchGif={this.searchGif}/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default App;
