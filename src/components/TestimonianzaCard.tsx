import profileImg from "../assets/profile-img.png";
import mapMarkImg from "../assets/map-mark.svg";
import calendarImg from "../assets/calendar.svg";
import ScrollableContainer from "./ScrollableContainer";
import useWindowSize from "../hooks/windowSize";
import { TAILWINDCSS_LG_BREAKPOINT } from "../constants/tailwind";

const TestimonianzaCard = () => {
  const [width] = useWindowSize();

  return (
    <div className="card flex flex-col space-y-8 md:space-y-5 p-4 md:p-10 w-[95%] max-w-[95%] md:max-w-[1000px]">
      <div className="flex items-center space-x-5">
        <img className="profile-img" src={profileImg} alt="" />
        <h4>Marge</h4>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <img src={mapMarkImg} alt="" />
            <span className="">Lago Maggiore</span>
          </div>
          <div className="flex space-x-2">
            <img src={calendarImg} alt="" />
            <span className="">23/04/2002</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ScrollableContainer slidesPerView={width > TAILWINDCSS_LG_BREAKPOINT ? 3 : 1} />
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <p className="mt-5 md:mt-0 md:mb-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <button className="primary w-full md:w-auto ml-auto">Vedi evento</button>
      </div>
    </div>
  );
};

export default TestimonianzaCard;
