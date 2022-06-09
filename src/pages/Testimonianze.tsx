import TestimonianzaCard from "../components/TestimonianzaCard";
import profileImg from "../assets/profile-img.png";

const Testimonianze = () => {
  const numeroTestimonianze = 10;
  const testimonianza = {
    profileImg: profileImg,
    name: "Marge",
    location: "Lago Maggiore",
    date: "23/04/2022",
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit\
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut\
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam\
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  };

  return (
    <div className="w-full h-full bg-light-grey py-10">
      <div className="flex flex-col mx-auto items-center space-y-20">
        {[...Array(numeroTestimonianze)].map((_, i) => {
          return (
            <TestimonianzaCard
              key={i}
              profileImg={testimonianza.profileImg}
              name={testimonianza.name}
              location={testimonianza.location}
              date={testimonianza.date}
              comment={testimonianza.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonianze;
