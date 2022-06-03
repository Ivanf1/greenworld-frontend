import SegnalazioneCard from "../components/SegnalazioneCard";

const Segnalazioni = () => {
  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="flex flex-col mx-auto items-center gap-20">
        <SegnalazioneCard></SegnalazioneCard>
        <SegnalazioneCard></SegnalazioneCard>
        <SegnalazioneCard></SegnalazioneCard>
        <SegnalazioneCard></SegnalazioneCard>
        <SegnalazioneCard></SegnalazioneCard>
        <SegnalazioneCard></SegnalazioneCard>
        <SegnalazioneCard></SegnalazioneCard>
      </div>
    </div>
  );
};

export default Segnalazioni;
