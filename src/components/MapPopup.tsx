import { useState } from "react";
import { LeafletMouseEvent, Map } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import ProgressBar from "./ProgressBar";
import eventImage from "../assets/a.jpg";
import mapMarkImg from "../assets/map-mark.svg";
import calendarImg from "../assets/calendar.svg";
import timeImg from "../assets/time.svg";
import close from "../assets/delete.svg";

interface EventoInfo {
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

const markers: EventoInfo[] = [
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

const MMap = () => {
  const [map, setMap] = useState<Map | undefined | null>(null);
  const [currentEvent, setCurrentEvent] = useState<EventoInfo | null | undefined>(null);

  const markerClickHandler = (e: LeafletMouseEvent) => {
    let selectedEvent = markers.find(
      (marker) => marker.n === e.latlng.lat && marker.e === e.latlng.lng
    );
    setCurrentEvent(selectedEvent);
    console.log(
      markers.find((marker) => marker.n === e.latlng.lat && marker.e === e.latlng.lng)?.name
    );
    if (map) {
      map.flyTo(e.latlng);
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="relative w-full h-full">
        <MapContainer
          center={[40.641991, 14.824107]}
          scrollWheelZoom={false}
          ref={setMap}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, i) => {
            return (
              <Marker
                position={[marker.n, marker.e]}
                eventHandlers={{ click: markerClickHandler }}
                key={i}
              />
            );
          })}
        </MapContainer>
        <button className="absolute bottom-[20px] right-[20px] z-[40] primary">
          Segnala un luogo
        </button>
      </div>

      {currentEvent && (
        <div className="bg-light-grey absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[90%] lg:max-w-[60%] p-5">
          <div className="relative">
            <div
              className="absolute top-[5px] right-[5px] cursor-pointer"
              onClick={() => setCurrentEvent(null)}
            >
              <img src={close} className="w-[14px] h-[14px]" alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 w-full lg:max-w-[78.125rem] mx-auto gap-x-5">
              <div className="flex items-center justify-center">
                <img src={currentEvent.img} className="h-auto w-auto rounded-lg" alt="" />
              </div>
              <div className="flex flex-col justify-center md:space-y-2 lg:space-y-10">
                <h3>{currentEvent.name}</h3>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <img src={mapMarkImg} alt="" />
                    <span>{currentEvent.indirizzo}</span>
                  </div>
                  <div className="flex space-x-2">
                    <img src={calendarImg} alt="" />
                    <span>{currentEvent.data}</span>
                  </div>
                  <div className="flex space-x-2">
                    <img src={timeImg} alt="" />
                    <span>{currentEvent.ora}</span>
                  </div>
                </div>
                <div>
                  <h4>Partecipanti</h4>
                  <ProgressBar
                    total={currentEvent.maxPartecipanti}
                    completed={currentEvent.partecipanti}
                    showLabel={true}
                  />
                </div>
                <div>
                  <button className="primary">Maggiori informazioni</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MMap;
