import HeroCarousel from "../components/HeroCarousel";
import HomeMap from "../components/HomeMap";
import Counter from "../components/Counter";
import "./Home.css";

import gridImg1 from "../assets/home-grid-1.jpg";
import gridImg2 from "../assets/home-grid-2.jpg";
import gridImg3 from "../assets/home-grid-3.jpg";
import downArrow from "../assets/down.svg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import { heroCarouselItemData } from "../data/heroCarouselData";

const Home = () => {
  const navigate = useNavigate();
  const eventMapSectionRef = useRef<HTMLDivElement | null>(null);

  const seeEventsClickHandler = () => {
    if (eventMapSectionRef.current) {
      const y = eventMapSectionRef.current.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="w-full h-full flex flex-col space-y-[200px]">
      <section className="hero w-full pt-20 md:pt-40">
        <div className="flex flex-col items-center lg:items-start space-y-8 max-w-[78.125rem] mx-auto px-5 xl:px-0">
          <header className="flex flex-col items-center lg:items-start space-y-8">
            <h1 className="text-3xl md:text-4xl leading-[3.8rem] font-bold max-w-lg text-center lg:text-left">
              Il nostro Pianeta è la nostra casa
            </h1>
            <p className="max-w-xs text-center lg:text-left font-semibold">
              Partecipa agli eventi organizzati dalla community e aiutaci a proteggerlo.
            </p>
          </header>
          <button className="primary" onClick={seeEventsClickHandler}>
            Vedi eventi
          </button>
        </div>
      </section>

      <section className="testimonianze-cta w-full py-52 lg:py-72">
        <div className="flex flex-col items-center lg:items-start max-w-[78.125rem] mx-auto px-5 xl:px-0">
          <header className="flex flex-col items-center lg:items-start">
            <h2 className="font-medium text-2xl text-center lg:text-left">
              Evento sulle montagne di Avellino
            </h2>
            <span className="font-regular text-lg text-center lg:text-left mt-1">
              18/05/1972 - Montagne, Avellino
            </span>
          </header>
          <button className="secondary-white mt-10" onClick={() => navigate("/testimonianze")}>
            Vedi testimonianze
          </button>
        </div>
      </section>

      <section className="h-full bg-light-grey" ref={eventMapSectionRef}>
        <div className="flex flex-col items-center pt-10 pb-6 px-5 xl:px-0">
          <header>
            <h3 className="text-center">
              Cerca un evento a cui partecipare o segnala un luogo da ripulire
            </h3>
          </header>
          <img src={downArrow} alt="" aria-hidden="true" />
        </div>
        <HomeMap />
      </section>

      <section className="bg-primary-tint p-5 lg:py-20">
        <div className="hero-carousel-wrapper max-w-[78.125rem] mx-auto home-card-shadow">
          <HeroCarousel items={heroCarouselItemData} />
        </div>
      </section>

      <section className="bg-light-grey p-5 lg:py-20">
        <div className="grid grid-cols-1 grid-rows-[repeat(6,auto)]  md:grid-cols-2 md:grid-rows-3 md:-y-10 lg:-y-20 lg:max-w-[78.125rem] mx-auto w-full h-full">
          <div className="md:home-card-shadow top-border md:border-none">
            <img src={gridImg1} alt="" className="w-full md:h-full  md:object-cover" />
          </div>
          <article className="bg-white h-full md:w-full md:flex home-card-shadow bottom-border md:border-none">
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
          </article>

          <article className="bg-white h-full md:w-full md:flex home-card-shadow bottom-border md:border-none">
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
          </article>
          <div className="md:home-card-shadow top-border md:border-none row-start-3 row-end-3 md:row-start-2 md:row-end-2 md:col-start-2 md:col-end-2 mt-20 md:mt-0">
            <img src={gridImg2} alt="persone" className="w-full md:h-full object-cover" />
          </div>

          <div className="md:home-card-shadow top-border md:border-none mt-20 md:mt-0">
            <img src={gridImg3} alt="spazzatura mare" className="w-full md:h-full object-cover" />
          </div>
          <article className="bg-white h-full md:w-full md:flex home-card-shadow bottom-border md:border-none">
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
          </article>
        </div>
      </section>

      <section className="w-full bg-primary-tint hidden lg:block">
        <div className="grid grid-cols-[30%_auto] py-60 max-w-[78.125rem] mx-auto">
          <div className="flex flex-col items-start space-y-6 px-5 xl:px-0">
            <h2 className="text-xl font-semibold">La tua azienda per il cambiamento climatico</h2>
            <p>
              234 aziende si sono già unite alla nostra causa. Diventa anche tu parte del
              cambiamento.
            </p>
            <button className="primary" onClick={() => navigate("candidatura-sponsor")}>
              Diventa Sponsor
            </button>
          </div>
          <div></div>
        </div>
      </section>

      <footer className="w-full bg-primary px-5 py-20">
        <div className="flex flex-col md:space-x-40 items-start text-[#dfebe8] xl:px-0 lg:max-w-[64rem] mx-auto">
          <div className="flex w-full space-x-20">
            <div className="flex flex-col space-y-4">
              <span className="font-semibold text-lg">Su di noi</span>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="font-semibold text-lg">Su di noi</span>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
              <a className="hover-underline-animation-footer" href="/">
                Chi siamo
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-end self-end mt-20 md:mt-10">
            <span className="font-logo text-lg">GreenWorld</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
