import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "react-rating";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useAxiosPublic from "../../hook/useAxiosPublic";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const SuccessStories = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/reviews").then((data) => {
      setReviews(data.data);
    });
  }, [axiosPublic]);

  // Sort on age in ascending order
  const sortedReviews = reviews.sort((a, b) => {
    return new Date(a.marriageDate) - new Date(b.marriageDate);
  });

  return (
    <Grid sx={{ my: "40px" }}>
      <SectionTitle title="What people say" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {sortedReviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={review.coupleImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {review.marriageDate}
                </Typography>
                <Typography gutterBottom variant="h6">
                  <Rating
                    readonly
                    initialRating={review.reviewStar}
                    emptySymbol={<StarBorderIcon />}
                    fullSymbol={<StarRateIcon />}
                    fractions={2}
                  />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.successStoryText}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default SuccessStories;
