import eventoImg from "../assets/b.jpg";

interface EventoProfiloData {
  img: string;
  location: string;
  date: string;
  description: string;
}

export const eventi: EventoProfiloData[] = Array(25).fill({
  img: eventoImg,
  location: "Lago dei cigni",
  date: "15/03/1992",
  description:
    "Lorem ipsum dolor sit sit sit dolor lorem qua la sit ipsum ipsum dolor sit sit sit dolor lorem qua la sit ipsum",
});
