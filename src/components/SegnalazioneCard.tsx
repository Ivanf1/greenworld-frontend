import Carousel from "./Carousel";
import profileImg from "../assets/profile-img.png";
import mapMarkImg from "../assets/map-mark.svg";

const SegnalazioneCard = () => {
  return (
    <div className="segnalazione-card rounded-lg p-10 flex flex-col gap-5 bg-white max-w-[1000px]">
      <div className="top-container flex gap-10">
        <div className="carousel-wrapper flex-1 w-[400px]">
          <Carousel />
        </div>
        <div className="info-evento flex flex-1 flex-col gap-3">
          <h3>Ma che ne so</h3>
          <p>
            lorem ipsum dolor sir lorem ipsum dolor sit lorem ipsum dolor sir lorem dolor sit bla
            lorem ipsum dolor sir lorem ipsum dolor
          </p>
          <div className="flex items-start gap-2">
            <img src={mapMarkImg} alt="" />
            <p className="location">Via di qua</p>
          </div>
          <div className="buttons-container flex flex-1 items-end gap-5 mb-5">
            <button className="primary">Crea evento</button>
            <button className="secondary">Rimuovi</button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="profile flex items-center gap-5">
          <img className="profile-img" src={profileImg} alt="" />
          <h4>Marge</h4>
        </div>
        <p className="pl-[100px]">
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
