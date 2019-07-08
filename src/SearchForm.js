import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = ({ q, searchGif }) => {
	return (
		<React.Fragment>
			<Grid item xs={12}>
				<TextField
					type="text"
					placeholder="Buscar"
					margin="normal"
					fullWidth
					value={q}
					onChange={searchGif('q')}
				/>
                <Button><SearchIcon /></Button>
			</Grid>
		</React.Fragment>
	);
};

export default SearchForm;
