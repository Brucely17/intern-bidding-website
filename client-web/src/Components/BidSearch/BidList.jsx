
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';

const BidList = ({ bids }) => {
  return (
    <Box sx={{ p: 2 }}>
      {bids.map((bid, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Product Category:</strong> {bid.productCategory}</Typography>
              <Typography variant="body2"><strong>Product Title:</strong> {bid.productTitle}</Typography>
              <Typography variant="body2"><strong>Product Description:</strong> {bid.productDescription}</Typography>
              <Typography variant="body2"><strong>Total Quantity:</strong> {bid.totalQty}</Typography>
              {/* <Typography variant="body2"><strong>Budget Disclosure:</strong> {bid.budgetDisclosure}</Typography> */}
              {/* <Typography variant="body2"><strong>Budget:</strong> {bid.budget}</Typography> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <Typography variant="body2"><strong>Warranty Type:</strong> {bid.warrantyType}</Typography> */}
              {/* <Typography variant="body2"><strong>Warranty Period:</strong> {bid.warrantyPeriod}</Typography> */}
              {/* <Typography variant="body2"><strong>Vendor Location:</strong> {bid.vendorLocation}</Typography> */}
              {/* <Typography variant="body2"><strong>Experience Exceptions:</strong> {bid.experienceExceptions}</Typography> */}
              {/* <Typography variant="body2"><strong>Bid Status:</strong> {bid.bidStatus}</Typography> */}
              <Typography variant="body2"><strong>Start Date:</strong> {new Date(bid.bidStart).toLocaleString()}</Typography>
              <Typography variant="body2"><strong>End Date:</strong> {new Date(bid.bidEnd).toLocaleString()}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default BidList;
