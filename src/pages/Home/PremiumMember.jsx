import { Card, CardContent, Typography, Button, Grid, Skeleton } from "@mui/material";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import usePremiumBioData from "../../hook/usePremiumBioData";

const PremiumMember = () => {
  const [premiumBio, loading] = usePremiumBioData();

  // Sort on age in ascending order
  const sortedProfiles = premiumBio.sort((a, b) => a.age - b.age);

  return (
    <Grid>
      <SectionTitle title="Our Premium member" />
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} style={{ maxWidth: 400, marginBottom: 30 }}>
              <CardContent>
                <Skeleton variant="rectangular" width={400} height={60} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: '1rem', width: '60%', marginTop: 1 }}
                />
              </CardContent>
            </Card>
          ))
        ) : (
          // Render actual data when loading is false
          sortedProfiles.slice(0,6).map((profile, index) => (
            <Card key={index} style={{ maxWidth: 400, marginBottom: 30 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Biodata ID: {profile.biodataId}
                </Typography>
                <Typography variant="body1">
                  Biodata Type: {profile.biodataType}
                </Typography>
                <img
                  src={profile.profileImage}
                  alt={`Profile ${profile.biodataId}`}
                  style={{ width: "100%", marginTop: 10, marginBottom: 10 }}
                />
                <Typography variant="body2">
                  Division: {profile.permanentDivision}
                </Typography>
                <Typography variant="body2">Age: {profile.age}</Typography>
                <Typography variant="body2">
                  Occupation: {profile.occupation}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10 }}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default PremiumMember;
