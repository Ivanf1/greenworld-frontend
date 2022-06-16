import { LOCAL_STORAGE_USER_KEY } from "./storageKeys";

export interface CurrentUser {
  nome: string;
}

const utenteSample = {
  nome: "Francesca",
};

const register = () => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(utenteSample));
  return utenteSample;
};

const login = () => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(utenteSample));
  return utenteSample;
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
