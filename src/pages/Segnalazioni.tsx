import SegnalazioneCard from "../components/SegnalazioneCard";

const Segnalazioni = () => {
  const numeroSegnalazioni = 10;
  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="flex flex-col mx-auto items-center space-y-20">
        {[...Array(numeroSegnalazioni)].map((_, i) => {
          return <SegnalazioneCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default Segnalazioni;
