import Carousel from "../components/Carousel";
import mapMarkImg from "../assets/map-mark.svg";
import calendarImg from "../assets/calendar.svg";
import timeImg from "../assets/time.svg";
import sponsorLogo from "../assets/pizzaciro.png";
import profileImg from "../assets/profilo.png";
import UserComment from "../components/UserComment";

const Evento = () => {
  const partecipanti = 45;
  const maxPartecipanti = 150;
  const numeroCommenti = 10;

  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="min-h-[calc(100vh-80px)] card mx-auto px-4 py-10 w-[95%] max-w-[95%] md:max-w-[1600px] md:p-10">
        <div className="grid grid-cols-1 grid-rows-[repeat(3,auto)] gap-y-5 xl:grid-cols-2 xl:grid-rows-[repeat(2,auto)] lg:gap-10">
          <div className="row-start-2 xl:row-start-1 xl:row-span-2">
            <Carousel />
          </div>

          <div className="flex flex-1 flex-col space-y-3">
            <h3 className="font-bold text-xl">Evento sul fiume Sarno</h3>

            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <img src={mapMarkImg} alt="" />
                <span className="">Sarno, 80087, SA</span>
              </div>
              <div className="flex space-x-2">
                <img src={calendarImg} alt="" />
                <span className="">10/07/2022</span>
              </div>
              <div className="flex space-x-2">
                <img src={timeImg} alt="" />
                <span className="">15:30</span>
              </div>
            </div>

            <p className="flex-1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet.
            </p>

            <div>
              <h4>Partecipanti</h4>
              <div className="flex items-center space-x-5">
                <span>
                  {partecipanti}/{maxPartecipanti}
                </span>
                <div className="w-[90%] xl:w-full h-[14px] rounded-lg bg-accent-purple-tint">
                  <div
                    className="h-[14px] rounded-lg bg-accent-purple"
                    style={{ width: `${partecipanti / (maxPartecipanti / 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end space-y-2 md:mt-0 md:space-x-5 md:mb-5">
            <button className="primary flex-1 lg:flex-initial">Partecipa</button>
            <button className="secondary flex-1 lg:flex-initial">Condividi</button>
          </div>
        </div>

        <div className="separator w-full my-20"></div>

        <div className="flex flex-col items-center space-y-5">
          <h3>Questo evento è sponsorizzato da</h3>

          <div className="grid grid-cols-[auto_auto] items-center gap-x-2 md:gap-x-10">
            <div className="flex flex-col items-center">
              <span className="font-semibold">Pizzeria da Ciro</span>
              <span className="text-xs">dal 1976</span>
              <span className="text-xs">Via Giovanni Nefasto, Genova, 83083</span>
              <span className="text-xs">pizzeriaciro.na - @ciroreal</span>
            </div>
            <img className="w-full max-w-[80px] max-h-[80px]" src={sponsorLogo} alt="" />
          </div>
        </div>

        <div className="separator w-full my-20"></div>

        <div>
          <div className="flex items-center space-x-5">
            <img className="profile-img" src={profileImg} alt="" />
            <h4 className="font-normal">Francesca</h4>
          </div>
          <div className="md:pl-[100px] space-y-5">
            <div className="flex flex-col mt-4">
              <label htmlFor="comment-input">Inserisci un commento</label>
              <textarea className="input lg:max-w-3xl h-40 md:h-20" name="comment-input" />
            </div>
            <button className="secondary  w-full lg:w-auto">Pubblica</button>
          </div>
        </div>

        <div className="flex flex-col space-y-10 mt-20 max-w-[1000px]">
          {[...Array(numeroCommenti)].map((_, i) => {
            return <UserComment key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Evento;
