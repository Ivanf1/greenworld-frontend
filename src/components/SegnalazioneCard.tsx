import Carousel from "./Carousel";
import profileImg from "../assets/profile-img.png";
import mapMarkImg from "../assets/map-mark.svg";

const SegnalazioneCard = () => {
  return (
    <div className="segnalazione-card">
      <div className="top-container">
        <div className="carousel-wrapper">
          <Carousel />
        </div>
        <div className="info-evento">
          <h4>Ma che ne so</h4>
          <p>
            lorem ipsum dolor sir lorem ipsum dolor sit lorem ipsum dolor sir lorem dolor sit bla
            lorem ipsum dolor sir lorem ipsum dolor
          </p>
          <div className="location-evento-wrapper">
            <img src={mapMarkImg} alt="" />
            <p className="location">Via di qua</p>
          </div>
          <div className="buttons-container">
            <button className="primary">Crea evento</button>
            <button className="secondary">Rimuovi</button>
          </div>
        </div>
      </div>
      <div className="commento-container">
        <div className="profile">
          <img src={profileImg} alt="" />
          <p>Marge</p>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat.
        </p>
      </div>
    </div>
  );
};

export default SegnalazioneCard;
