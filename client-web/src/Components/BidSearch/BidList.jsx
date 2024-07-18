import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const BidList = ({ bids }) => {
  const generatePDF = (bid) => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [['Field', 'Value']],
      body: [
        ['Product Category', bid.productCategory],
        ['Bid Start', new Date(bid.bidStart).toLocaleString()],
        ['Bid End', new Date(bid.bidEnd).toLocaleString()],
        ['Product Title', bid.productTitle],
        ['Product Description', bid.productDescription],
        ['Total Quantity', bid.totalQty],
        ['Budget Disclosure', bid.budgetDisclosure],
        ['Budget', bid.budget],
        ['Warranty Type', bid.warrantyType],
        ['Warranty Period', bid.warrantyPeriod],
        ['Vendor Location', bid.vendorLocation],
        ['Experience Exceptions', bid.experienceExceptions],
        ['Bid Status', bid.bidStatus]
      ],
    });

    doc.save(`bid-details-${bid._id}.pdf`);
  };

  return (
    <Box sx={{ p: 2 }}>
      {bids.map((bid) => (
        <Paper key={bid._id} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography 
                variant="body1" 
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  generatePDF(bid);
                }}
                style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}
              >
                <strong>Bid No</strong> {bid._id }
              </Typography>
              <Typography variant="body2"><strong>Product Category:</strong> {bid.productCategory}</Typography>
              <Typography variant="body2"><strong>Product Title:</strong> {bid.productTitle}</Typography>
              <Typography variant="body2"><strong>Product Description:</strong> {bid.productDescription}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="body2"><strong>Total Quantity:</strong> {bid.totalQty}</Typography>
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