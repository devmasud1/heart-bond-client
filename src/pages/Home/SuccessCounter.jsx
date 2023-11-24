// src/components/SuccessCounter.js

import { Typography, Grid, Paper } from "@mui/material";

const SuccessCounter = () => {
  // Assuming you have the counts available from your data or API
  const totalBiodataCount = 1000;
  const girlsBiodataCount = 600;
  const boysBiodataCount = 400;
  const marriagesCompletedCount = 300;

  return (
    <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px", marginBottom:"40px" }}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          elevation={2}
          style={{
            padding: "15px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            height: "100px",
            backgroundColor: "#f5f5f5"
          }}
        >
          <Typography variant="subtitle1" style={{textAlign:'center', marginTop:'30px', fontSize: '22px'}}>
            Total Biodata: {totalBiodataCount}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          elevation={2}
          style={{
            padding: "15px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            height: "100px",
            backgroundColor: "#d7e8d6"
          }}
        >
          <Typography variant="subtitle1" style={{textAlign:'center', marginTop:'30px', fontSize: '22px'}}>
            Girls: {girlsBiodataCount}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          elevation={2}
          style={{
            padding: "15px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            height: "100px",
            backgroundColor: "#fce6c9"
          }}
        >
          <Typography variant="subtitle1" style={{textAlign:'center', marginTop:'30px', fontSize: '22px'}}>
            Boys: {boysBiodataCount}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper
          elevation={2}
          style={{
            padding: "15px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            height: "100px",
            backgroundColor: "#f5e3d7"
          }}
        >
          <Typography variant="subtitle1" style={{textAlign:'center', marginTop:'30px', fontSize: '22px'}}>
            Marriages Completed: {marriagesCompletedCount}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Paper>
  );
};

export default SuccessCounter;
