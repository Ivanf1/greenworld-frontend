import mapMarkImg from "../assets/map-mark.svg";
import calendarImg from "../assets/calendar.svg";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  location: string;
  date: string;
  description: string;
}

const EventoProfilo = ({ img, location, date, description }: Props) => {
  return (
    <article className="evento-profilo-container grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-rows-1 gap-y-10 lg:grid-cols-[minmax(100px,200px)_auto_auto] lg:gap-x-2">
      <img src={img} alt="" className="w-full max-w-full block rounded-lg lg:w-auto" />
      <div className="flex flex-col space-y-1 self-center justify-self-start lg:pl-4">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <img src={mapMarkImg} alt="" aria-hidden="true" />
            <span className="">{location}</span>
          </div>
          <div className="flex space-x-2">
            <img src={calendarImg} alt="" aria-hidden="true" />
            <span className="">{date}</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div className="self-center">
        <Link to="/testimonia">
          <button className="primary w-full md:w-auto ml-auto">Aggiungi testimonianza</button>
        </Link>
      </div>
    </article>
  );
};

export default EventoProfilo;
