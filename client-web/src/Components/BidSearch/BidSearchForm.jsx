
import React, { useState,useEffect } from 'react';
import { Box } from '@mui/material';
import FilterSideBar from './FilterSideBar';
import SearchBar from './SearchBar';
import BidList from './BidList';
import * as XLSX from 'xlsx';




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

  //excel data 
  const [excelData, setExcelData] = useState([]);

 

  const handleSearch = async () => {
    console.log("Handle search ");
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





   
  async function handleExcelShseetUpload(e) {
  
    const file = e.target.files[0];
    if (!file) {
      return;
    }
  
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const workSheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(workSheet);
    const processedData = jsonData.map(data => ({
      ...filters, 
      productCategory: data['productCategory'],
      productTitle: data['productTitle'],
      totalQty: data['totalQty'],
    }));
  
    console.log(processedData);
    console.log(filters);
    setExcelData(prevState => [...prevState, ...processedData]);
    SendExceDataToServer();
  }

  async function SendExceDataToServer() {
    try {
      const response = await fetch('http://localhost:5000/excelbidsearch', {
        method: 'POST',
        body: JSON.stringify(excelData),
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
  } 
  

  console.log(excelData);

  return (
    <Box sx={{ display: 'flex' }}>
      <FilterSideBar filters={filters} setFilters={setFilters} />
      <Box  sx={{ flexGrow: 1 }}>
        <SearchBar filters={filters} setFilters={setFilters} handleSearch={handleSearch} handleExcelShseetUpload={handleExcelShseetUpload}/>
        <BidList bids={bids} />
      </Box>
    </Box>
  );
};

export default BidSearchForm;
