import TestimonianzaCard from "../components/TestimonianzaCard";

const Testimonianze = () => {
  const numeroTestimonianze = 10;
  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="flex flex-col mx-auto items-center space-y-20">
        {[...Array(numeroTestimonianze)].map((_, i) => {
          return <TestimonianzaCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default Testimonianze;
