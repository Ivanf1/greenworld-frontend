import { EVENT_COMMENTS, EVENT_TESTIMONIANZE } from "./storageKeys";

export const resetLocalStorage = () => {
  localStorage.removeItem(EVENT_COMMENTS);
  localStorage.removeItem(EVENT_TESTIMONIANZE);
};
