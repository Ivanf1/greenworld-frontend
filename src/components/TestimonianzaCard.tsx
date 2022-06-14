import mapMarkImg from "../assets/map-mark.svg";
import calendarImg from "../assets/calendar.svg";
import ScrollableContainer from "./ScrollableContainer";
import useWindowSize from "../hooks/windowSize";
import { TAILWINDCSS_LG_BREAKPOINT } from "../constants/tailwind";

interface Props {
  profileImg: string;
  name: string;
  location: string;
  date: string;
  comment: string;
  imgs?: string[];
}

const TestimonianzaCard = ({ profileImg, name, location, date, comment, imgs }: Props) => {
  const [width] = useWindowSize();

  return (
    <div className="card flex flex-col space-y-8 md:space-y-5 p-4 md:p-10 w-[95%] max-w-[95%] md:max-w-[1000px]">
      <div className="flex items-center space-x-5">
        <img className="profile-img" src={profileImg} alt="" />
        <h4>{name}</h4>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <img src={mapMarkImg} alt="" />
            <span className="">{location}</span>
          </div>
          <div className="flex space-x-2">
            <img src={calendarImg} alt="" />
            <span className="">{date}</span>
          </div>
        </div>
      </div>
      {imgs && (
        <div className="w-full">
          <ScrollableContainer
            slidesPerView={width > TAILWINDCSS_LG_BREAKPOINT ? 3 : 1}
            imgs={imgs}
          />
        </div>
      )}
      <div className="flex flex-col-reverse md:flex-col">
        <p className="mt-5 md:mt-0 md:mb-5">{comment}</p>
        <button className="primary w-full md:w-auto ml-auto">Vedi evento</button>
      </div>
    </div>
  );
};

export default TestimonianzaCard;
