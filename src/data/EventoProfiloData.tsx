import eventoImg from "../assets/b.jpg";

interface EventoProfiloData {
  img: string;
  altImg: string;
  location: string;
  date: string;
  description: string;
}

export const eventi: EventoProfiloData[] = Array(25).fill({
  img: eventoImg,
  altImg: "Una persona raccoglie una bottiglia di plastica sulla spiaggia",
  location: "Lago dei cigni",
  date: "15/03/1992",
  description:
    "Lorem ipsum dolor sit sit sit dolor lorem qua la sit ipsum ipsum dolor sit sit sit dolor lorem qua la sit ipsum",
});
