import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./Carousel.css";
import testA from "../assets/gennaro-swim.jpg";
// import testB from "../assets/b.jpg";
import gennaro from "../assets/gennaro.jpg";
import HeroCarouselItem from "./HeroCarouselItem";

SwiperCore.use([Navigation, Pagination]);

const HeroCarousel = () => {
  return (
    <Swiper slidesPerView={1} loop={true} navigation={true} pagination={true}>
      <SwiperSlide>
        <HeroCarouselItem
          leftImg={testA}
          profileImg={gennaro}
          name="Gennaro"
          title="Un'esperienza fantastica!"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCarouselItem
          leftImg={testA}
          profileImg={gennaro}
          name="Gennaro"
          title="Un'esperienza fantastica!"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
