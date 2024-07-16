import React from 'react';
import { Box, TextField, Button, Grid, Autocomplete } from '@mui/material';
import { categories } from './data';

const SearchBar = ({ filters, setFilters, handleSearch }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutoCompleteChange = (event, newValue) => {
    //prev is used to copy previous values ,so combining this and fileter can be made using this 
    setFilters((prev) => ({
      ...prev,
      productCategory: newValue,
    }));
  };

  return (
    <Box sx={{ p: 2, display: 'flex',justifyContent :'flex-end'}}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={2}>
          <Autocomplete
            options={categories}
            getOptionLabel={(option) => option}
            value={filters.productCategory}
            onChange={handleAutoCompleteChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Product Category"
                margin="normal"
                size="small"
                InputLabelProps={{ style: { color: '#5c5c5c' } }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 8,
                        borderRight: '2px solid #ccc',
                        paddingRight: 8,
                      }}
                    />
                  ),
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="Product Title"
            name="productTitle"
            value={filters.productTitle}
            onChange={handleChange}
            margin="normal"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Product Description"
            name="productDescription"
            value={filters.productDescription}
            onChange={handleChange}
            margin="normal"
            size="small"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ height: '40px', marginTop: '16px' }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
