import profileImg from "../assets/profile-img.png";
import testA from "../assets/a.jpg";
import testB from "../assets/b.jpg";
import { SEGNALAZIONI } from "./storageKeys";

export interface Segnalazione {
  id: string;
  titolo: string;
  citta: string;
  via: string;
  civico?: string;
  data: string;
  commentoUtente: string;
  nomeUtente: string;
  imgUtente: string;
  imgs: string[];
}

const defaultCommentoUtente =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad porro beatae quis architecto. Aspernatur, itaque natus numquam delectus eligendi quasi libero accusamus! Delectus asperiores aut quis error expedita sit sapiente itaque vero. Consectetur ad vel illum modi dicta laborum rerum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad porro beatae quis architecto. Aspernatur, itaque natus numquam delectus eligendi quasi libero accusamus! Delectus asperiores aut quis error expedita sit sapiente itaque vero. Consectetur ad vel illum modi dicta laborum rerum!";

const defaultSegnalazioni: Segnalazione[] = Array<Segnalazione>(10)
  .fill({} as Segnalazione)
  .map((_, i) => {
    return {
      id: `${i}`,
      titolo: `Segnalazione urgente ${i}`,
      citta: "Milano",
      via: "via del monte",
      civico: "12",
      data: "15/03/2022",
      commentoUtente: defaultCommentoUtente,
      nomeUtente: "Marge",
      imgUtente: profileImg,
      imgs: [testA, testB],
    };
  });

export const getSegnalazioni = () => {
  const removedSegnalazioni = getRemovedSegnalazioni();
  return defaultSegnalazioni.filter(
    (segnalazione) => !removedSegnalazioni.includes(segnalazione.id)
  );
};

export const removeSegnalazione = (idSegnalazione: string) => {
  const removedSegnalazioni = localStorage.getItem(SEGNALAZIONI);
  if (removedSegnalazioni) {
    const s = JSON.parse(removedSegnalazioni) as string[];
    s.push(idSegnalazione);
    localStorage.setItem(SEGNALAZIONI, JSON.stringify(s));
  } else {
    const s = [idSegnalazione];
    localStorage.setItem(SEGNALAZIONI, JSON.stringify(s));
  }
};

const getRemovedSegnalazioni = () => {
  const s = localStorage.getItem(SEGNALAZIONI);
  return s ? s : ([] as string[]);
};
