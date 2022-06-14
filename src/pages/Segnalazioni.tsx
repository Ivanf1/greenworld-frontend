import SegnalazioneCard from "../components/SegnalazioneCard";

import { segnalazioni } from "../data/SegnalazioneCardData";

const Segnalazioni = () => {
  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="flex flex-col mx-auto items-center space-y-20">
        {segnalazioni.map((segnalazione, i) => {
          return <SegnalazioneCard key={i} {...segnalazione} />;
        })}
      </div>
    </div>
  );
};

export default Segnalazioni;
