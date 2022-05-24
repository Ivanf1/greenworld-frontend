import profileImg from "../assets/profile-img.png";
import mapMarkImg from "../assets/map-mark.svg";
import testA from "../assets/a.jpg";
import testB from "../assets/b.jpg";
import "./TestimonianzaCard.css";

const TestimonianzaCard = () => {
  return (
    <div className="testimonianza-card mx-auto">
      <div className="profile">
        <img src={profileImg} alt="" />
        <p>Marge</p>
      </div>
      <div className="info-evento">
        <img src={mapMarkImg} alt="" />
        <div className="location-evento">
          <p className="location">Lago Maggiore</p>
          <p className="date">23/04/2002</p>
        </div>
        <button className="secondary">Vedi evento</button>
      </div>
      <div className="evento-images scrollbar-style">
        <img src={testA} alt="" />
        <img src={testB} alt="" />
        <img src={testA} alt="" />
        <img src={testB} alt="" />
        <img src={testA} alt="" />
        <img src={testB} alt="" />
        <img src={testA} alt="" />
        <img src={testB} alt="" />
        <img src={testA} alt="" />
        <img src={testB} alt="" />
      </div>
      <p className="comment">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </div>
  );
};

export default TestimonianzaCard;
