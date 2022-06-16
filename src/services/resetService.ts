import { EVENT_COMMENTS } from "./storageKeys";

export const resetLocalStorage = () => {
  localStorage.removeItem(EVENT_COMMENTS);
};
