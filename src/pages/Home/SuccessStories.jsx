import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import useAxiosPublic from "../../hook/useAxiosPublic";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Rating } from "flowbite-react";

const SuccessStories = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    axiosPublic.get("/reviews").then((data) => {
      setReviews(data.data);
    });
  }, [axiosPublic]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sort on age in ascending order
  const sortedReviews = reviews.sort((a, b) => {
    return new Date(a.marriageDate) - new Date(b.marriageDate);
  });

  return (
    <div className="container mx-auto my-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <SectionTitle title="What people say" />
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        slidesPerView={slidesPerView}
      >
        {sortedReviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col bg-white shadow-lg rounded-md overflow-hidden h-96 mb-8">
              <img
                src={review.coupleImage}
                alt="Couple"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">
                  {review.marriageDate}
                </h5>
                <div className="flex items-center mb-2">
                  <Rating>
                    {[...Array(5)].map((_, index) => (
                      <Rating.Star
                        key={index}
                        filled={index < review.reviewStar}
                      />
                    ))}
                  </Rating>
                </div>
                <p className="text-sm text-gray-600 mb-5">
                  {review.successStoryText}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStories;
