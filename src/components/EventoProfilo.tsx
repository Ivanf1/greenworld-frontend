import busteImg from "../assets/buste.jpg";
import "./EventoProfilo.css";

const EventoProfilo = () => {
  return (
    <div className="evento-profilo-container">
      <img src={busteImg} alt="" />
      <div className="evento-info-container">
        <span className="luogo text-bold">Lago dei cigni</span>
        <span className="data text-small">15/03/1992</span>
        <p>
          Lorem ipsum dolor sit sit sit dolor lorem qua la sit ipsum ipsum dolor sit sit sit dolor
          lorem qua la sit ipsum
        </p>
      </div>
      <div className="button-container">
        <button className="secondary">Aggiungi testimonianza</button>
      </div>
    </div>
  );
};

export default EventoProfilo;
