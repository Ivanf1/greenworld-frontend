import profileImg from "../assets/profile-img.png";

interface SegnalazioneCardData {
  titolo: string;
  via: string;
  testo: string;
  nomeUtente: string;
  commento: string;
  imgProfilo: string;
}

export const segnalazioni: SegnalazioneCardData[] = Array(10).fill({
  titolo: "Segnalazione urgente",
  via: "Via del monte",
  testo:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum amet commodi quia excepturi, iste maxime aperiam ut modi nostrum!",
  nomeUtente: "Marge",
  commento:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad porro beatae quis architecto. Aspernatur, itaque natus numquam delectus eligendi quasi libero accusamus! Delectus asperiores aut quis error expedita sit sapiente itaque vero. Consectetur ad vel illum modi dicta laborum rerum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad porro beatae quis architecto. Aspernatur, itaque natus numquam delectus eligendi quasi libero accusamus! Delectus asperiores aut quis error expedita sit sapiente itaque vero. Consectetur ad vel illum modi dicta laborum rerum!",
  imgProfilo: profileImg,
});
