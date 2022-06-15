import Carousel from "./Carousel";
import mapMarkImg from "../assets/map-mark.svg";
import UserComment from "./UserComment";

interface Props {
  titolo: string;
  via: string;
  testo: string;
  nomeUtente: string;
  commento: string;
  imgProfilo: string;
}

const SegnalazioneCard = ({ titolo, via, testo, nomeUtente, commento, imgProfilo }: Props) => {
  return (
    <article className="card p-4 md:p-10 flex flex-col space-y-10 md:space-y-20 w-[95%] max-w-[95%] md:max-w-[1000px]">
      <section className="grid grid-cols-1 grid-rows-[repeat(3,auto)] gap-y-5 lg:grid-cols-2 lg:grid-rows-[repeat(2,auto)] lg:gap-10">
        <section className="row-start-2 lg:row-start-1 lg:row-span-2">
          <Carousel />
        </section>

        <section className="flex flex-1 flex-col space-y-3">
          <h3 className="font-bold text-xl">{titolo}</h3>
          <div className="flex items-start space-x-2">
            <img src={mapMarkImg} alt="" />
            <p className="">{via}</p>
          </div>
          <p>{testo}</p>
        </section>

        <div className="flex flex-col md:flex-row md:items-end space-y-2 md:mt-0 md:space-x-5 md:mb-5">
          <button className="primary flex-1 lg:flex-initial">Crea evento</button>
          <button className="delete flex-1 lg:flex-initial">Rimuovi</button>
        </div>
      </section>

      <UserComment name={nomeUtente} profileImg={imgProfilo} comment={commento} />
    </article>
  );
};

export default SegnalazioneCard;
