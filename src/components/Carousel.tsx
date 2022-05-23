import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import testA from "../assets/a.jpg";
import testB from "../assets/b.jpg";

const MyCarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <div>
        <img src={testA} alt="..." />
      </div>
      <div>
        <img src={testB} alt="..." />
      </div>
      <div>
        <img src={testA} alt="..." />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
