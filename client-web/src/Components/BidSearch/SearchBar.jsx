import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Autocomplete } from '@mui/material';
import { categories } from './data';


const SearchBar = ({ filters, setFilters, handleSearch,handleExcelShseetUpload }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleAutoCompleteChange = (event, newValue) => {
    setFilters((prev) => ({
      ...prev,
      productCategory: newValue,
    }));
  };

  
  // async function handleExcelShseetUpload(e) {
  
  //   const file = e.target.files[0];
  //   if (!file) {
  //     return;
  //   }
  
  //   const data = await file.arrayBuffer();
  //   const workbook = XLSX.read(data);
  //   const workSheet = workbook.Sheets[workbook.SheetNames[0]];
  //   const jsonData = XLSX.utils.sheet_to_json(workSheet);
  //   const processedData = jsonData.map(data => ({
  //     productCategory: data['productCategory'],
  //     productTitle: data['productTitle'],
  //     totalQty: data['totalQty'],
  //   }));
  
  //   console.log(processedData);
  //   console.log(filters);
  //   setExcelData(prevState => [...prevState, ...processedData]);
  //   SendExceDataToServer();
  // }

  // async function SendExceDataToServer() {
  //   try {
  //     const response = await fetch('http://localhost:5000/excelbidsearch', {
  //       method: 'POST',
  //       body: JSON.stringify(excelData),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const data = await response.json();
  //     console.log("Data:",data);
  //     setBids(data);
  //   } catch (error) {
  //     console.error('Error fetching bids:', error);
  //   }
  // } 
  

  // console.log(excelData);

  return (
    <Box sx={{
      
      display: 'flex',
      // justifyContent: 'flex-end',
     
    }}>
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
            
            onClick={handleSearch}
            sx={{ height: '40px', marginTop: '10px' }}
            style={{backgroundColor: '#757de8', color: '#FFFFFF'}}
          >
            Search
          </Button>
          <label htmlFor="excelUpload" className='relative top-2 left-5 bg-[#757DE8] px-2 py-2.5 text-white rounded-[4px] shadow-lg text-lg cursor-pointer'>Uplaod xls</label>
          <input className='hidden' id='excelUpload' type='file' accept='.xlsx, .xls, .csv' onChange={handleExcelShseetUpload}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
