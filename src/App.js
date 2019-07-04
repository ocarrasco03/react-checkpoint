import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "./App.css";

require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      limit: 20,
      result: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://api.giphy.com/v1/gifs/search?q=${this.state.q}&api_key=${process.env.API_KEY}&limit=${this.state.limit}`)
      .then((response) => {
        console.log(response);
        this.setState({ result: response.data });
      })
      .catch(e => console.log(`Unable to fetch data: ${e}`));
  }

  render() {
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={8}>
            {/* Search */}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
