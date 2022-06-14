import Map from "./Map";
import { markers } from "../data/MapMarkersData";

const HomeMap = () => {
  return <Map events={markers} />;
};

export default HomeMap;
