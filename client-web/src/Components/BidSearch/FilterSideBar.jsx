import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Paper, Grid, Autocomplete } from '@mui/material';
import { FaUpload, FaFilter, FaCalendarAlt, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { states, cities, pincodes, categories, warrantyTypes, warrantyPeriods, vendorLocations } from './data'; // Import data for states, cities, and pincodes

const FilterSideBar = ({ filters, setFilters }) => {


// this accepts all kind of input including ,checked ,files ,input values 
  const handleChange = (event) => {
    const { name, value, files, checked, type } = event.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : (files ? files[0] : value)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(filters);
  };

  return (
    <Box sx={{ p: 2, width: '200px' }}>
      <Typography variant="h6">Filters</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" sx={{ mt: 2 }}>
         
          <TextField
            label="Bid Start"
            name="bidStart"
            type="date"
            value={filters.bidStart}
            onChange={handleChange}
            fullWidth
           
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: '#5c5c5c' } }}
            InputProps={{
              startAdornment: <FaCalendarAlt style={{ color: '#757de8', marginRight: 8 }} />,
              style: { borderColor: '#757de8' }
            }}
          />oh

          <TextField
            label="Bid End"
            name="bidEnd"
            type="date"
            value={filters.bidEnd}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: '#5c5c5c' } }}
            InputProps={{
              startAdornment: <FaCalendarAlt style={{ color: '#757de8', marginRight: 8 }} />,
              style: { borderColor: '#757de8' }
            }}
          />

         
   
          <TextField
            label="Total Qty"
            name="totalQty"
            type="number"
            value={filters.totalQty}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#5c5c5c' } }}
            InputProps={{
              startAdornment: <span style={{ color: '#757de8' }}>Qty:</span>,
              style: { borderColor: '#757de8' }
            }}
          />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend" style={{ color: '#757de8' }}>Budget Disclosure</FormLabel>
            <RadioGroup
              row
              name="budgetDisclosure"
              value={filters.budgetDisclosure}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" style={{ color: '#333333' }} />
              <FormControlLabel value="No" control={<Radio />} label="No" style={{ color: '#333333' }} />
            </RadioGroup>
          </FormControl>

          {filters.budgetDisclosure === 'Yes' && (
            <TextField
              label="Budget"
              name="budget"
              type="number"
              value={filters.budget}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#5c5c5c' } }}
              InputProps={{
                startAdornment: <span style={{ color: '#757de8' }}>₹</span>,
                style: { borderColor: '#757de8' }
              }}
            />
          )}





          <Autocomplete
            options={warrantyTypes}
            getOptionLabel={(option) => option}
            value={filters.warrantyType}
            onChange={(event, newValue) => setFilters({ ...filters, warrantyType: newValue })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Warranty Type"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#5c5c5c' } }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <span style={{ color: '#757de8' }}>Type:</span>,
                }}
              />
            )}
          />



          <Autocomplete
            options={warrantyPeriods}
            getOptionLabel={(option) => option.toString()}
            value={filters.warrantyPeriod}
            onChange={(event, newValue) => setFilters({ ...filters, warrantyPeriod: newValue })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Warranty Period"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#5c5c5c' } }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <span style={{ color: '#757de8' }}>Period:</span>,
                }}
              />
            )}
          />

          <TextField
            label="Product Delivery Expectation Date"
            name="deliveryDate"
            type="date"
            value={filters.deliveryDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#5c5c5c' }, shrink: true }}
            InputProps={{
              startAdornment: <FaCalendarAlt style={{ color: '#757de8', marginRight: 8 }} />,
              style: { borderColor: '#757de8' }
            }}
          />

          <Autocomplete
            options={vendorLocations}
            getOptionLabel={(option) => option}
            value={filters.vendorLocation}
            onChange={(event, newValue) => setFilters({ ...filters, vendorLocation: newValue })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Vendor Location"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#5c5c5c' } }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <FaMapMarkerAlt style={{ color: '#757de8', marginRight: 8 }} />,
                }}
              />
            )}
          />

          <TextField
            label="Experience Exceptions"
            name="experienceExceptions"
            value={filters.experienceExceptions}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#5c5c5c' } }}
            InputProps={{ style: { borderColor: '#757de8' } }}
          />

          <TextField
            label="Contact Person"
            name="contactPerson"
            value={filters.contactPerson}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#5c5c5c' } }}
            InputProps={{
              startAdornment: <FaUser style={{ color: '#757de8', marginRight: 8 }} />,
              style: { borderColor: '#757de8' }
            }}
          />

       

          
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend" style={{ color: '#757de8' }}>Bid Status</FormLabel>
            <RadioGroup
              row
              name="bidStatus"
              value={filters.bidStatus}
              onChange={handleChange}
            >
              <FormControlLabel value="Published" control={<Radio />} label="Published" style={{ color: '#333333' }} />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{ backgroundColor: '#757de8', color: '#FFFFFF', marginTop: '16px' }}
          >
            Apply Filters
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default FilterSideBar;
