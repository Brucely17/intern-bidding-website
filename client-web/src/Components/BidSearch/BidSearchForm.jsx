
import React, { useState,useEffect } from 'react';
import { Box } from '@mui/material';
import FilterSideBar from './FilterSideBar';
import SearchBar from './SearchBar';
import BidList from './BidList';

const BidSearchForm = () => {
  const [filters, setFilters] = useState({
    productCategory: '',
    bidStart: '',
    bidEnd: '',
    productTitle: '',
    productDescription: '',
    totalQty: 0,
    budgetDisclosure: '',
    budget: '',
    warrantyType: '',
    warrantyPeriod: 0,
    vendorLocation: '',
    experienceExceptions: '',
    bidStatus: 'Published'
  });


  const [bids, setBids] = useState([]);

 

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:5000/bidsearch', {
        method: 'POST',
        body: JSON.stringify(filters),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log("Data:",data);
      setBids(data);
    } catch (error) {
      console.error('Error fetching bids:', error);
    }
  };
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response  = await fetch('http://localhost:5000/bidsearch', {
          method: 'POST',
          body: JSON.stringify(filters),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setBids(data);
      } catch (error) {
        console.error('Error fetching all bids:', error);
      }
    };
    fetchData();
  },[]);

  return (
    <Box sx={{ display: 'flex' }}>
      <FilterSideBar filters={filters} setFilters={setFilters} />
      <Box  sx={{ flexGrow: 1 }}>
        <SearchBar filters={filters} setFilters={setFilters} handleSearch={handleSearch}/>
        <BidList bids={bids} />
      </Box>
    </Box>
  );
};

export default BidSearchForm;
