import { getStorageKeys } from "./storageKeys";

export const resetLocalStorage = () => {
  getStorageKeys().map((key) => localStorage.removeItem(key));
};
