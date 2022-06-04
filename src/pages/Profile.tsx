import profileImg from "../assets/profilo.png";
import EventoProfilo from "../components/EventoProfilo";
import "./Profile.css";

const Profile = () => {
  const eventiPartecipati = 25;
  const eventiPerPremio = 100;

  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="profile-container card mx-auto px-4 py-10 w-[95%] max-w-[95%] md:max-w-[1600px] md:p-10">
        <div className="grid grid-cols-1 xl:grid-cols-[70%_30%] grid-rows-[1fr_auto_auto] xl:grid-rows-1">
          <div className="flex flex-col w-full md:flex-row gap-10 sm:gap-20 items-center mx-auto lg:mx-0">
            <img src={profileImg} alt="" />
            <div className="flex flex-col w-full md:w-auto items-center md:items-start gap-5">
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
            <span>
              {eventiPartecipati}/{eventiPerPremio}
            </span>
            <div className="flex items-center gap-10">
              <div className="w-[90%] xl:w-full h-[14px] rounded-lg bg-accent-purple-tint">
                <div
                  className="h-[14px] rounded-lg bg-accent-purple"
                  style={{ width: `${eventiPartecipati / (eventiPerPremio / 100)}%` }}
                ></div>
              </div>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M0.232666 43.01H43.2327V0.00999969H0.232666V43.01Z"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0_357_3459" transform="scale(0.015625)" />
                  </pattern>
                  <image
                    id="image0_357_3459"
                    width="64"
                    height="64"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="separator w-full my-20"></div>
        <div>
          <h4 className="text-center mb-10 md:text-left">
            Hai partecipato a {eventiPartecipati} eventi
          </h4>
          <div className="flex flex-col gap-20 lg:gap-10">
            {[...Array(eventiPartecipati)].map((_, i) => (
              <EventoProfilo key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
