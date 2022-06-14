import profileImg from "../assets/profilo.png";
import EventoProfilo from "../components/EventoProfilo";
import ProgressBar from "../components/ProgressBar";
import giftImg from "../assets/gift.svg";

import { eventi } from "../data/EventoProfiloData";

const Profile = () => {
  const eventiPartecipati = eventi.length;
  const eventiPerPremio = 100;

  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="min-h-[calc(100vh-80px)] card mx-auto px-4 py-10 w-[95%] max-w-[95%] md:max-w-[1600px] md:p-10">
        <div className="grid grid-cols-1 xl:grid-cols-[70%_30%] grid-rows-[1fr_auto_auto] xl:grid-rows-1">
          <div className="flex flex-col w-full md:flex-row space-y-10 md:space-x-10 md:space-y-0 items-center mx-auto lg:mx-0">
            <img src={profileImg} alt="" />
            <div className="flex flex-col w-full md:w-auto items-center md:items-start space-y-5">
              <h3>Francesca Brignano</h3>
              <div className="grid w-full grid-cols-[1fr_auto] md:grid-rows-2 grid-rows-3 gap-x-5">
                <span className="username-label font-semibold">Username</span>
                <span className="username">Francesca70</span>
                <span className="email-label font-semibold">Email</span>
                <span className="email">francesca97@live.it</span>
                <span className="community-label font-semibold">Nella community</span>
                <span className="community">16 gennaio 2021</span>
              </div>
              <button className="secondary w-full xl:w-auto">Modifica informazioni</button>
            </div>
          </div>
          <div className="separator my-20 xl:hidden"></div>
          <div className="flex flex-col md:self-center md:justify-self-end w-full">
            <h4 className="text-center mb-10 md:text-left md:mb-0">Punteggio conseguito</h4>
            <div className="flex items-center space-x-10">
              <ProgressBar total={eventiPerPremio} completed={eventiPartecipati} showLabel={true} />
              <img src={giftImg} alt="" />
            </div>
          </div>
        </div>
        <div className="separator w-full my-20"></div>
        <div>
          <h4 className="text-center mb-10 md:text-left">
            Hai partecipato a {eventiPartecipati} eventi
          </h4>
          <div className="flex flex-col space-y-20 lg:space-y-10">
            {eventi.map((evento, i) => (
              <EventoProfilo
                key={i}
                img={evento.img}
                location={evento.location}
                date={evento.date}
                description={evento.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
