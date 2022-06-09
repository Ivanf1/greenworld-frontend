import Carousel from "./Carousel";
import profileImg from "../assets/profile-img.png";
import mapMarkImg from "../assets/map-mark.svg";

const SegnalazioneCard = () => {
  return (
    <div className="card p-4 md:p-10 flex flex-col space-y-10 md:space-y-20 w-[95%] max-w-[95%] md:max-w-[1000px]">
      <div className="grid grid-cols-1 grid-rows-[repeat(3,auto)] gap-y-5 lg:grid-cols-2 lg:grid-rows-[repeat(2,auto)] lg:gap-10">
        <div className="row-start-2 lg:row-start-1 lg:row-span-2">
          <Carousel />
        </div>

        <div className="flex flex-1 flex-col space-y-3">
          <h3 className="font-bold text-xl">Ma che ne so</h3>
          <div className="flex items-start space-x-2">
            <img src={mapMarkImg} alt="" />
            <p className="">Via di qua</p>
          </div>
          <p>
            lorem ipsum dolor sir lorem ipsum dolor sit lorem ipsum dolor sir lorem dolor sit bla
            lorem ipsum dolor sir lorem ipsum dolor
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end space-y-2 md:mt-0 md:space-x-5 md:mb-5">
          <button className="primary">Crea evento</button>
          <button className="delete">Rimuovi</button>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-5">
          <img className="profile-img" src={profileImg} alt="" />
          <h4 className="font-semibold">Marge</h4>
        </div>
        <p className="mt-4 md:pl-[100px]">
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
