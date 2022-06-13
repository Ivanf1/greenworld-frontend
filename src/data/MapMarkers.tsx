import eventImage from "../assets/a.jpg";

export interface EventoInfo {
  n: number;
  e: number;
  name: string;
  partecipanti: number;
  maxPartecipanti: number;
  ora: string;
  indirizzo: string;
  data: string;
  img: string;
}

export const markers: EventoInfo[] = [
  {
    n: 40.641991,
    e: 14.824107,
    name: "Evento sul fiume Sarno",
    partecipanti: 45,
    maxPartecipanti: 150,
    ora: "15:30",
    indirizzo: "Sarno",
    data: "15/03/2022",
    img: eventImage,
  },
  {
    n: 40.64,
    e: 14.843801,
    name: "Evento eventualmente eventuale",
    partecipanti: 40,
    maxPartecipanti: 150,
    ora: "15:30",
    indirizzo: "Sarno",
    data: "15/03/2022",
    img: eventImage,
  },
];
