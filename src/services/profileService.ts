import { getConcludedEvents } from "./eventService";

export const defaultPartecipatedEvents = getConcludedEvents();

export const getUserPartecipatedEvents = () => {
  return defaultPartecipatedEvents;
};
