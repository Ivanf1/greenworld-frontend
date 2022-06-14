import TestimonianzaCard from "../components/TestimonianzaCard";

import { testimonianze } from "../data/TestimonianzaCardData";

const Testimonianze = () => {
  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="flex flex-col mx-auto items-center space-y-20">
        {testimonianze.map((testimonianza, i) => {
          return <TestimonianzaCard key={i} {...testimonianza} />;
        })}
      </div>
    </div>
  );
};

export default Testimonianze;
