import TestimonianzaCard from "../components/TestimonianzaCard";

import { testimonianze } from "../data/TestimonianzaCardData";

const Testimonianze = () => {
  return (
    <div className="w-full h-full bg-light-grey py-10">
      <main className="flex flex-col mx-auto items-center space-y-20">
        {testimonianze.map((testimonianza, i) => {
          return <TestimonianzaCard key={i} {...testimonianza} />;
        })}
      </main>
    </div>
  );
};

export default Testimonianze;
