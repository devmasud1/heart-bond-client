import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">About HeartBond</Typography>
            <Typography variant="body2">
              HeartBond is dedicated to helping individuals find their life partners.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Useful Links</Typography>
            <Typography variant="body2">
              <Link href="#">Home</Link>
              <br />
              <Link href="#">Biodatas</Link>
              <br />
              <Link href="#">About Us</Link>
              <br />
              <Link href="#">Contact Us</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">
              Address: 1234 HeartBond St, City, Country
              <br />
              Email: info@heartbond.com
              <br />
              Phone: +1234567890
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" style={{ marginTop: '20px', textAlign: 'center' }}>
          © {new Date().getFullYear()} HeartBond Matrimony. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
