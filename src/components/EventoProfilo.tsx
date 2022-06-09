import busteImg from "../assets/b.jpg";
import mapMarkImg from "../assets/map-mark.svg";
import calendarImg from "../assets/calendar.svg";

const EventoProfilo = () => {
  return (
    <div className="evento-profilo-container grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-rows-1 gap-y-10 lg:grid-cols-[minmax(100px,200px)_auto_auto] lg:gap-x-2">
      <img src={busteImg} alt="" className="w-full max-w-full block rounded-lg lg:w-auto" />
      <div className="flex flex-col space-y-1 self-center justify-self-start lg:pl-4">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <img src={mapMarkImg} alt="" />
            <span className="">Lago dei cigni</span>
          </div>
          <div className="flex space-x-2">
            <img src={calendarImg} alt="" />
            <span className="">15/03/1992</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit sit sit dolor lorem qua la sit ipsum ipsum dolor sit sit sit dolor
          lorem qua la sit ipsum
        </p>
      </div>
      <div className="self-center">
        <button className="primary w-full md:w-auto ml-auto">Aggiungi testimonianza</button>
      </div>
    </div>
  );
};

export default EventoProfilo;
