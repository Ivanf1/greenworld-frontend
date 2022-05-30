import HeroCarousel from "../components/HeroCarousel";
import "./Home.css";

import gridImg1 from "../assets/home-grid-1.jpg";
import gridImg2 from "../assets/home-grid-2.jpg";
import gridImg3 from "../assets/home-grid-3.jpg";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-[200px]">
      <div className="hero w-full pl-40">
        <div className="flex flex-col items-start gap-8 max-w-xl">
          <h1 className="text-4xl font-bold">Il nostro Pianeta è la nostra casa</h1>
          <p className="max-w-xs font-light">
            Partecipa agli eventi organizzati dalla community e aiutaci a proteggerlo.
          </p>
          <button className="primary">Vedi eventi</button>
        </div>
      </div>

      <div className="testimonianze-cta w-full pl-40">
        <div className="flex flex-col items-start max-w-2xl">
          <h2 className="font-medium">Evento sulle montagne di Avellino</h2>
          <h3 className="font-regular mt-1">18/05/1972 - Montagne, Avellino</h3>
          <button className="secondary-white mt-10">Vedi testimonianze</button>
        </div>
      </div>

      <div className="hero-carousel-wrapper w-full">
        <HeroCarousel></HeroCarousel>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 mx-40 bg-light-grey">
        <div>
          <img src={gridImg1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-4 self-center justify-self-center mx-auto px-[25%]">
          <span className="text-5xl font-bold text-accent-blue">124</span>
          <h2 className="text-xl font-bold">Eventi organizzati</h2>
          <p>
            La nostra community ha organizzato e continua ad organizzare numerosi eventi di pulizia
            su tutto il territorio italiano.
          </p>
        </div>
        <div className="flex flex-col gap-4 self-center justify-self-center mx-auto px-[25%]">
          <span className="text-5xl font-bold text-accent-red">4200</span>
          <h2 className="text-xl font-bold">Volontari registrati</h2>
          <p>
            I volontari che prendono parte ad i nostri eventi sono in continuo aumento. Hanno
            background differenti ma condividono la passione della salvaguardia del nostro Pianeta.
          </p>
        </div>
        <div>
          <img src={gridImg2} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={gridImg3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-4 self-center justify-self-center mx-auto px-[25%]">
          <span className="text-5xl font-bold text-accent-purple inline">
            6230
            <span className="font-bold text-xl text-accent-purple inline">kg</span>
          </span>
          <h2 className="text-xl font-bold">Spazzatura raccolta</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-primary-tint py-60">
        <div className="flex flex-col pl-[20%] pr-[40%] items-start gap-y-6">
          <h2 className="text-xl font-semi-bold">La tua azienda per il cambiamento climatico</h2>
          <p>
            234 aziende si sono già unite alla nostra causa. Diventa anche tu parte del cambiamento.
          </p>
          <button className="primary">Diventa Sponsor</button>
        </div>
        <div></div>
      </div>

      <footer className="flex flex-row gap-x-40 items-start bg-primary text-white py-20 px-40">
        <div className="flex flex-col gap-y-10">
          <span>Chi siamo</span>
          <span>Chi siamo</span>
          <span>Chi siamo</span>
          <span>Chi siamo</span>
          <span>Chi siamo</span>
        </div>
        <div className="flex flex-col gap-y-10">
          <span>Chi siamo</span>
          <span>Chi siamo</span>
          <span>Chi siamo</span>
          <span>Chi siamo</span>
          <span>Chi siamo</span>
        </div>
        <div className="flex-1 flex justify-end self-end">
          <span className="font-logo text-lg">GreenWorld</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
