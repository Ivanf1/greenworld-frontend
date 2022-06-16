import { LOCAL_STORAGE_USER_KEY } from "./storageKeys";
import profileImg from "../assets/profilo.png";

export interface CurrentUser {
  nome: string;
  cognome: string;
  username: string;
  email: string;
  dataRegistrazione: string;
  img: string;
}

const defaultUtente: CurrentUser = {
  nome: "Francesca",
  cognome: "Brignano",
  username: "Francesca70",
  email: "francesca97@live.it",
  dataRegistrazione: "16 gennaio 2021",
  img: profileImg,
};

const register = () => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(defaultUtente));
  return defaultUtente;
};

const login = () => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(defaultUtente));
  return defaultUtente;
};

const logout = () => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)!);
};

const AuthenticationService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthenticationService;
