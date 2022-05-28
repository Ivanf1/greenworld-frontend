import busteImg from "../assets/buste.jpg";
import "./EventoProfilo.css";

const EventoProfilo = () => {
  return (
    <div className="evento-profilo-container grid grid-cols-[200px_60%_2fr] gap-x-2 mt-5 mb-5">
      <img src={busteImg} alt="" />
      <div className="flex flex-col gap-1 self-center justify-self-start pl-4">
        <span className="text-sm font-medium">Lago dei cigni</span>
        <span className="text-xs">15/03/1992</span>
        <p>
          Lorem ipsum dolor sit sit sit dolor lorem qua la sit ipsum ipsum dolor sit sit sit dolor
          lorem qua la sit ipsum
        </p>
      </div>
      <div className="self-center justify-self-center">
        <button className="secondary">Aggiungi testimonianza</button>
      </div>
    </div>
  );
};

export default EventoProfilo;
