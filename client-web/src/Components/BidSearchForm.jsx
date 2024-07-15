import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Paper, Grid, Autocomplete } from '@mui/material';
import { FaUpload, FaFilter, FaCalendarAlt, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import necessary icons
import { states, cities, pincodes ,categories,warrantyTypes,warrantyPeriods,vendorLocations} from './data'; // Import data for states, cities, and pincodes



const BidSearchForm = () => {
  const [formValues, setFormValues] = useState({
    productCategory: '',
    bidValidity: '',
    productTitle: '',
    productDescription: '',
    totalQty: '',
    budgetDisclosure: '',
    budget: '',
    productSpecification: null,
    warrantyType: '',
    warrantyPeriod: '',
    deliveryDate: '',
    vendorLocation: '',
    experienceExceptions: '',
    contactPerson: '',
    contactNo: '',
    bidStatus: 'Published',
    streetAddress: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div className='flex justify-center'>
      <Paper elevation={3} className='w-full md:w-3/4 lg:w-1/2 p-2.5 m-2.5 items-center bg-f5' style={{ padding: '2rem', margin: '2rem', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h2" style={{ color: '#3F51B5', marginBottom: '1rem', alignItems: 'center' }}>Bid Search Form</Typography>

        <form onSubmit={handleSubmit}>
          <section className='section'>
            <Typography variant="subtitle1" style={{ color: '#757de8', marginBottom: '0.5rem' }}>Product Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                  options={categories}
                  getOptionLabel={(option) => option}
                  value={formValues.productCategory}
                  onChange={(event, newValue) => setFormValues({ ...formValues, productCategory: newValue })}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Product Category"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ style: { color: '#5c5c5c' } }}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 8,
                            borderRight: '2px solid #ccc',
                            paddingRight: 8,
                          }}>
                            <FaFilter style={{ color: '#B197FC', fontSize: 20 }} />
                          </div>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Bid Validity"
                  name="bidValidity"
                  type="number"
                  inputProps={{ min: 1, max: 21 }}
                  value={formValues.bidValidity}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <FaCalendarAlt style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  label="Product Title"
                  name="productTitle"
                  inputProps={{ maxLength: 50 }}
                  value={formValues.productTitle}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <FaUser style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Product Description"
                  name="productDescription"
                  inputProps={{ maxLength: 500 }}
                  multiline
                  rows={4}
                  value={formValues.productDescription}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{ style: { borderColor: '#757de8' } }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box margin="normal">
                  <Button variant="contained" component="label" style={{ backgroundColor: '#2196F3', color: '#FFFFFF' }}>
                    <FaUpload className="mr-2" />
                    Upload
                    <input
                      type="file"
                      name="productSpecification"
                      accept=".doc,.docx,.xls,.xlsx,.pdf"
                      hidden
                      onChange={handleChange}
                    />
                  </Button>
                  {formValues.productSpecification && <Typography variant="body2">{formValues.productSpecification.name}</Typography>}
                </Box>
              </Grid>
            </Grid>
          </section>

          <section className='section'>
            <Typography variant="subtitle1" style={{ color: '#757de8', marginBottom: '0.5rem' }}>Warranty and Delivery</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Total Qty"
                  name="totalQty"
                  type="number"
                  value={formValues.totalQty}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <span style={{ color: '#757de8' }}>Qty:</span>,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend" style={{ color: '#757de8' }}>Budget Disclosure</FormLabel>
                  <RadioGroup
                    row
                    name="budgetDisclosure"
                    value={formValues.budgetDisclosure}
                    onChange={handleChange}
                    
                  >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" style={{ color: '#333333' }} />
                    <FormControlLabel value="No" control={<Radio />} label="No" style={{ color: '#333333' }} />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {formValues.budgetDisclosure === 'Yes' && (
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Budget"
                    name="budget"
                    type="number"
                    value={formValues.budget}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: '#5c5c5c' } }}
                    InputProps={{
                      startAdornment: <span style={{ color: '#757de8' }}>₹</span>,
                      style: { borderColor: '#757de8' }
                    }}
                  />
                </Grid>
              )}
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                  options={warrantyTypes}
                  getOptionLabel={(option) => option}
                  value={formValues.warrantyType}
                  onChange={(event, newValue) => setFormValues({ ...formValues, warrantyType: newValue })}
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
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                  options={warrantyPeriods}
                  getOptionLabel={(option) => option.toString()}
                  value={formValues.warrantyPeriod}
                  onChange={(event, newValue) => setFormValues({ ...formValues, warrantyPeriod: newValue })}
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
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Product Delivery Expectation Date"
                  name="deliveryDate"
                  type="date"
                  value={formValues.deliveryDate}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' }, shrink: true }}
                  InputProps={{
                    startAdornment: <FaCalendarAlt style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={vendorLocations}
                  getOptionLabel={(option) => option}
                  value={formValues.vendorLocation}
                  onChange={(event, newValue) => setFormValues({ ...formValues, vendorLocation: newValue })}
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
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Experience Exceptions"
                  name="experienceExceptions"
                  value={formValues.experienceExceptions}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <FaUser style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
            </Grid>
          </section>

          <section className='section'>
            <Typography variant="subtitle1" style={{ color: '#757de8', marginBottom: '0.5rem' }}>Contact Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Contact Person"
                  name="contactPerson"
                  value={formValues.contactPerson}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <FaUser style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Contact No"
                  name="contactNo"
                  value={formValues.contactNo}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <FaPhone style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
              </Grid>
          </section>
          <section className='section'>
            <Typography variant="subtitle1" style={{ color: '#757de8', marginBottom: '0.5rem' }}>Delivery Address</Typography>
            <Grid container spacing={2}>
              
              <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                  options={states}
                  getOptionLabel={(option) => option}
                  value={formValues.state}
                  onChange={(event, newValue) => setFormValues({ ...formValues, state: newValue })}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="State"
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
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                  options={cities[formValues.state] || []} // Filter cities based on selected state
                  getOptionLabel={(option) => option}
                  value={formValues.city}
                  onChange={(event, newValue) => setFormValues({ ...formValues, city: newValue })}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
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
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                  options={pincodes[formValues.city] || []} // Filter pincodes based on selected city
                  getOptionLabel={(option) => option}
                  value={formValues.pincode}
                  onChange={(event, newValue) => setFormValues({ ...formValues, pincode: newValue })}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Pincode"
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
              </Grid>
              {/* <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Country"
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <FaMapMarkerAlt style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid> */}
              </Grid>
          </section>
          <section>
          
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Street Address"
                  name="streetAddress"
                  value={formValues.streetAddress}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: '#5c5c5c' } }}
                  InputProps={{
                    startAdornment: <FaMapMarkerAlt style={{ color: '#757de8', marginRight: 8 }} />,
                    style: { borderColor: '#757de8' }
                  }}
                />
              </Grid>
            {/* </Grid> */}
          </section>

          <section className='section'>
            <Typography variant="subtitle1" style={{ color: '#757de8', marginBottom: '0.1rem' }}>Bid Status</Typography>
            <FormControl component="fieldset" margin="normal">
              <RadioGroup
                row
                name="bidStatus"
                value={formValues.bidStatus}
                onChange={handleChange}
              >
                <FormControlLabel value="Published" control={<Radio />} label="Published" style={{ color: '#333333' }} />
                <FormControlLabel value="Draft" control={<Radio />} label="Draft" style={{ color: '#333333' }} />
              </RadioGroup>
            </FormControl>
          </section>

          <Box display="flex" justifyContent="center" marginTop="2rem">
            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#3F51B5', color: '#FFFFFF' }}>Submit</Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default BidSearchForm;