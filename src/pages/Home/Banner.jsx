import { Typography, Box } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "500px",
        backgroundImage: 'url("https://i.ibb.co/dPctR4R/banner.jpg")',
        backgroundSize: "cover",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          backgroundColor: 'rgba(255, 0, 0, 0.4)',
          padding: '15px',
          color: "#fff",
        }}
      >
        <Typography   variant="h4" gutterBottom fontWeight="700">
          Connecting Hearts, Creating Bonds
        </Typography>
        <Typography variant="subtitle1" fontWeight="600">
          Find your perfect match with HeartBond Matrimony
        </Typography>
      </Box>
    </Box>
  );
};
export default Banner;
