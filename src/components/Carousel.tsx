import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";
import testA from "../assets/a.jpg";
import testB from "../assets/b.jpg";

SwiperCore.use([Navigation, Pagination]);

const MyCarousel = () => {
  return (
    <Swiper slidesPerView={1} loop={true} navigation={true} pagination={true}>
      <SwiperSlide>
        <img src={testA} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testB} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
