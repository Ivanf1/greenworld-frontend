import HeroCarousel from "../components/HeroCarousel";
import HomeMap from "../components/MapUnderTest";
import Counter from "../components/Counter";
import "./Home.css";

import gridImg1 from "../assets/home-grid-1.jpg";
import gridImg2 from "../assets/home-grid-2.jpg";
import gridImg3 from "../assets/home-grid-3.jpg";
import downArrow from "../assets/down.svg";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-[200px]">
      <div className="hero w-full pt-[10vh] md:pt-[20vh]">
        <div className="flex flex-col items-center lg:items-start space-y-8 max-w-[78.125rem] mx-auto px-5 xl:px-0">
          <h1 className="text-3xl md:text-4xl leading-[3.8rem] font-bold max-w-lg text-center lg:text-left">
            Il nostro Pianeta è la nostra casa
          </h1>
          <p className="max-w-xs text-center lg:text-left font-semibold">
            Partecipa agli eventi organizzati dalla community e aiutaci a proteggerlo.
          </p>
          <button className="primary">Vedi eventi</button>
        </div>
      </div>

      <div className="testimonianze-cta w-full py-52 lg:py-72">
        <div className="flex flex-col items-center lg:items-start max-w-[78.125rem] mx-auto px-5 xl:px-0">
          <h2 className="font-medium text-2xl text-center lg:text-left">
            Evento sulle montagne di Avellino
          </h2>
          <h5 className="font-regular text-lg text-center lg:text-left mt-1">
            18/05/1972 - Montagne, Avellino
          </h5>
          <button className="secondary-white mt-10">Vedi testimonianze</button>
        </div>
      </div>

      <div className="h-full bg-light-grey">
        <div className="flex flex-col items-center pt-10 pb-6">
          <h3 className="text-center">
            Cerca un evento a cui partecipare o segnala un luogo da ripulire
          </h3>
          <img src={downArrow} alt="" />
        </div>
        <HomeMap />
      </div>

      <div className="bg-primary-tint p-5 lg:py-20">
        <div className="hero-carousel-wrapper max-w-[78.125rem] mx-auto home-card-shadow">
          <HeroCarousel />
        </div>
      </div>

      <div className="bg-light-grey p-5 lg:py-20">
        <div className="grid grid-cols-1 grid-rows-[repeat(6,auto)]  md:grid-cols-2 md:grid-rows-3 md:-y-10 lg:-y-20 lg:max-w-[78.125rem] mx-auto w-full h-full">
          {/* prettier-ignore */}
          <div className="md:home-card-shadow top-border md:border-none">
            <img src={gridImg1} alt="" className="w-full md:h-full  md:object-cover" />
          </div>
          <div className="bg-white h-full md:w-full md:flex home-card-shadow bottom-border md:border-none">
            <div className="mx-auto md:max-w-[70%] flex flex-col items-center justify-center px-5 md:px-0 py-5 sm:items-start sm:text-left lg:py-0">
              <span className="text-4xl font-bold text-accent-blue">
                <Counter from={0} to={124} />
              </span>
              <h2 className="text-xl font-bold mb-5">Eventi organizzati</h2>
              <p>
                La nostra community ha organizzato e continua ad organizzare numerosi eventi di
                pulizia su tutto il territorio italiano.
              </p>
            </div>
          </div>

          <div className="bg-white h-full md:w-full md:flex home-card-shadow bottom-border md:border-none">
            <div className="mx-auto md:max-w-[70%] flex flex-col items-center justify-center px-5 md:px-0 py-5 sm:items-start sm:text-left lg:py-0">
              <span className="text-4xl font-bold text-accent-red">
                <Counter from={0} to={4200} />
              </span>
              <h2 className="text-xl font-bold mb-5">Volontari registrati</h2>
              <p>
                I volontari che prendono parte ad i nostri eventi sono in continuo aumento. Hanno
                background differenti ma condividono la passione della salvaguardia del nostro
                Pianeta.
              </p>
            </div>
          </div>
          <div className="md:home-card-shadow top-border md:border-none row-start-3 row-end-3 md:row-start-2 md:row-end-2 md:col-start-2 md:col-end-2 mt-20 md:mt-0">
            <img src={gridImg2} alt="persone" className="w-full md:h-full object-cover" />
          </div>

          <div className="md:home-card-shadow top-border md:border-none mt-20 md:mt-0">
            <img src={gridImg3} alt="spazzatura mare" className="w-full md:h-full object-cover" />
          </div>
          <div className="bg-white h-full md:w-full md:flex home-card-shadow bottom-border md:border-none">
            <div className="mx-auto md:max-w-[70%] flex flex-col items-center justify-center px-5 md:px-0 py-10 sm:items-start sm:text-left lg:py-0">
              <span className="text-4xl font-bold text-accent-purple inline">
                <Counter from={0} to={6230} />
                <span className="font-bold text-xl text-accent-purple inline">kg</span>
              </span>
              <h2 className="text-xl font-bold mb-5">Spazzatura raccolta</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-tint hidden lg:block">
        <div className="grid grid-cols-[30%_auto] py-60 max-w-[78.125rem] mx-auto">
          <div className="flex flex-col items-start space-y-6 px-5 xl:px-0">
            <h2 className="text-xl font-semibold">La tua azienda per il cambiamento climatico</h2>
            <p>
              234 aziende si sono già unite alla nostra causa. Diventa anche tu parte del
              cambiamento.
            </p>
            <button className="primary">Diventa Sponsor</button>
          </div>
          <div></div>
        </div>
      </div>

      <footer className="w-full bg-primary px-5 py-20">
        <div className="flex flex-col md:space-x-40 items-start text-white xl:px-0 lg:max-w-[78.125rem] mx-auto">
          <div className="flex w-full space-x-20">
            <div className="flex flex-col space-y-10">
              <span>Chi siamo</span>
              <span>Chi siamo</span>
              <span>Chi siamo</span>
              <span>Chi siamo</span>
              <span>Chi siamo</span>
            </div>
            <div className="flex flex-col space-y-10">
              <span>Chi siamo</span>
              <span>Chi siamo</span>
              <span>Chi siamo</span>
              <span>Chi siamo</span>
              <span>Chi siamo</span>
            </div>
          </div>
          <div className="flex-1 flex justify-end self-end mt-20 md:mt-10">
            <span className="font-logo text-lg">GreenWorld</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
