import Typography from "@mui/material/Typography";

const SectionTitle = ({ title }) => {
  return (
    <Typography
      variant="h6"
      textAlign="center"
      component="div"
      sx={{
        color: "secondary",
        fontWeight: "600",
        mb: "30px",
        "&::after": {
          content: '""',
          display: "block",
          width: "140px",
          height: "2px",
          backgroundColor: "red",
          marginBottom: "25px",
          textAlign: "center",
          margin: "auto",
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
