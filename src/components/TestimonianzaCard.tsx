import profileImg from "../assets/profile-img.png";
import mapMarkImg from "../assets/map-mark.svg";
import testA from "../assets/a.jpg";
import testB from "../assets/b.jpg";
import "./TestimonianzaCard.css";

const TestimonianzaCard = () => {
  return (
    <div className="testimonianza-card flex flex-col gap-5 p-10 rounded-lg bg-white max-w-[1000px]">
      <div className="flex items-center gap-5">
        <img className="profile-img" src={profileImg} alt="" />
        <h4>Marge</h4>
      </div>
      <div className="flex items-start gap-2">
        <img className="w-[22px]" src={mapMarkImg} alt="" />
        <div className="flex flex-col">
          <p className="text-sm">Lago Maggiore</p>
          <p className="text-xs">23/04/2002</p>
        </div>
        <button className="secondary ml-10">Vedi evento</button>
      </div>
      <div className="evento-images scrollbar-style flex gap-5 pb-[10px] pl-[10px]">
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
      <p>
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
