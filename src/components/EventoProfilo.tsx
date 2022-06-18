import mapMarkImg from "../assets/map-mark.svg";
import calendarImg from "../assets/calendar.svg";
import { Link } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  img: string;
  altImg: string;
  location: string;
  date: string;
  description: string;
  nome: string;
  id: string;
  testimonianza: boolean;
}

const EventoProfilo = ({
  img,
  altImg,
  location,
  date,
  description,
  nome,
  id,
  testimonianza,
  ...others
}: Props) => {
  return (
    <article className="evento-profilo-container grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-rows-1 gap-y-10 lg:grid-cols-[minmax(100px,200px)_auto_auto] lg:gap-x-2">
      <img src={img} alt={altImg} className="w-full max-w-full block rounded-lg lg:w-auto" />
      <div className="flex flex-col space-y-1 self-center justify-self-start lg:pl-4">
        <div className="flex flex-col space-y-2">
          <h4>{nome}</h4>
          <div className="flex space-x-2">
            <img src={mapMarkImg} alt="" aria-hidden="true" />
            <span>{location}</span>
          </div>
          <div className="flex space-x-2">
            <img src={calendarImg} alt="" aria-hidden="true" />
            <span>{date}</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex flex-col space-y-2 self-center min-w-[260px]">
        {testimonianza && (
          <Link to={`/testimonia/${id}`}>
            <button className="primary w-full ml-auto" {...others}>
              Aggiungi testimonianza
            </button>
          </Link>
        )}
        <Link to={`/evento/${id}`}>
          <button className="secondary w-full ml-auto" {...others}>
            Vedi evento
          </button>
        </Link>
      </div>
    </article>
  );
};

export default EventoProfilo;
