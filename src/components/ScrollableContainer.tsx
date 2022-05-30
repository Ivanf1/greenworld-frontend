import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./ScrollableContainer.css";
import testA from "../assets/a.jpg";
import testB from "../assets/b.jpg";

SwiperCore.use([FreeMode, Pagination]);

interface Props {
  slidesPerView?: number;
}

const ScrollableContainer = ({ slidesPerView }: Props) => {
  return (
    <Swiper
      slidesPerView={slidesPerView || 3}
      loop={false}
      freeMode={true}
      pagination={true}
      spaceBetween={20}
      grabCursor={true}
    >
      <SwiperSlide>
        <img src={testA} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testB} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testA} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testB} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testA} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testB} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testA} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testB} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ScrollableContainer;
