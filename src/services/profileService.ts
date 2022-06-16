import { getConcludedEvents } from "./eventService";

interface UserInfo {
  nome: string;
  cognome: string;
  username: string;
  email: string;
  dataRegistrazione: string;
}

const defaultUserInfo: UserInfo = {
  nome: "Francesca",
  cognome: "Brignano",
  username: "Francesca70",
  email: "francesca97@live.it",
  dataRegistrazione: "16 gennaio 2021",
};

export const defaultPartecipatedEvents = getConcludedEvents();

export const getUserInfo = () => {
  return defaultUserInfo;
};

export const getUserPartecipatedEvents = () => {
  return defaultPartecipatedEvents;
};
