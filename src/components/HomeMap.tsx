import Map from "./Map";
import { getActiveEvents } from "../services/eventService";
import { useQuery } from "react-query";

const HomeMap = () => {
  const activeEventsQuery = useQuery("activeEvents", getActiveEvents);

  if (activeEventsQuery.isLoading || !activeEventsQuery.data) {
    return <div className="h-full"></div>;
  }

  return <Map events={activeEventsQuery.data} />;
};

export default HomeMap;
