import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Icon, LeafletMouseEvent, Map } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";

import { TAILWINDCSS_LG_BREAKPOINT, TAILWINDCSS_MD_BREAKPOINT } from "../constants/tailwind";
import useWindowSize from "../hooks/windowSize";
import ProgressBar from "./ProgressBar";

import mapMarkImg from "../assets/map-mark.svg";
import homeMapMarkImg from "../assets/home-map-mark.svg";
import calendarImg from "../assets/calendar.svg";
import timeImg from "../assets/time.svg";
import close from "../assets/delete.svg";
import sponsorLogo from "../assets/pizzaciro.png";
import searchIcon from "../assets/search.svg";

interface EventoSponsor {
  nome: string;
  testo: string;
  indirizzo: string;
  info: string;
  logo: string;
}

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
  altImg: string;
  sponsors?: EventoSponsor[];
}

interface Props {
  events: EventoInfo[];
}

const MMap = ({ events }: Props) => {
  const [map, setMap] = useState<Map | undefined | null>(null);
  const [currentEvent, setCurrentEvent] = useState<EventoInfo | null | undefined>(null);
  const mapSectionRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth] = useWindowSize();
  const [init, setInit] = useState<boolean>(true);

  const scrollToEventSection = () => {
    if (mapSectionRef.current) {
      const offset =
        windowWidth >= TAILWINDCSS_LG_BREAKPOINT
          ? 250
          : windowWidth >= TAILWINDCSS_MD_BREAKPOINT
          ? 160
          : 520;
      const y = mapSectionRef.current.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToMapSection = () => {
    const offset = windowWidth >= TAILWINDCSS_MD_BREAKPOINT ? 200 : 70;
    if (mapSectionRef.current) {
      const y = mapSectionRef.current.getBoundingClientRect().top + (window.pageYOffset - offset);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const markerClickHandler = (e: LeafletMouseEvent) => {
    let selectedEvent = events.find(
      (marker) => marker.n === e.latlng.lat && marker.e === e.latlng.lng
    );
    setCurrentEvent(selectedEvent);
    if (map) {
      map.flyTo(e.latlng);
      scrollToEventSection();
    }
  };

  const eventSectionClickHandler = () => {
    setCurrentEvent(null);
    scrollToMapSection();
  };

  const GestureHandlingSetter = () => {
    /* eslint-disable */
    const map = useMap() as any;
    map.gestureHandling.enable();
    map.addHandler("gestureHandling", GestureHandling);
    setInit(false);
    /* eslint-enable */
    return null;
  };

  return (
    <div className="w-full h-full relative">
      <section className="relative w-full h-full" ref={mapSectionRef}>
        <MapContainer
          center={[40.641991, 14.824107]}
          scrollWheelZoom={false}
          doubleClickZoom={true}
          ref={setMap}
          zoom={13}
        >
          {init && <GestureHandlingSetter />}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {events.map((event, i) => {
            return (
              <Marker
                position={[event.n, event.e]}
                eventHandlers={{ click: markerClickHandler }}
                icon={
                  new Icon({
                    iconUrl: homeMapMarkImg,
                    iconSize: [40, 40],
                    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
                    popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
                  })
                }
                key={i}
              >
                <Popup>{event.name}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
        <Link to="segnala">
          <button className="absolute bottom-[20px] right-[20px] z-[40] primary">
            Segnala un luogo
          </button>
        </Link>
        <div className="flex absolute top-[10px] left-[74px] z-[40] search-bar-container pr-2 w-[min(calc(100%-74px-8px-12px),400px)]">
          <input
            type="text"
            placeholder="Cerca un luogo o un evento"
            className="flex-1 search-bar"
          />
          <img src={searchIcon} alt="" aria-hidden="true" />
        </div>
      </section>

      {currentEvent && (
        <div className="bg-light-grey pb-5" id="sezione-evento">
          <section className="card xl:max-w-[78.125rem] xl:mx-auto mx-5 p-5">
            <section className="relative ">
              <div
                className="absolute -top-3 -right-3 md:top-[5px] md:right-[5px] cursor-pointer"
                onClick={eventSectionClickHandler}
                role="button"
                aria-label="Chiudi la sezione dell'evento"
                aria-controls="sezione-evento"
              >
                <img src={close} className="w-[14px] h-[14px]" alt="" aria-hidden="true" />
              </div>
              <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] md:grid-rows-1 w-full lg:max-w-[78.125rem] mx-auto gap-x-5 lg:gap-x-20">
                <section className="flex items-center justify-center">
                  <img
                    src={currentEvent.img}
                    className="h-auto w-auto rounded-lg"
                    alt={currentEvent.altImg}
                  />
                </section>
                <section className="flex flex-col py-10 space-y-5 lg:justify-center md:space-y-2 lg:space-y-10">
                  <h3>{currentEvent.name}</h3>
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <img src={mapMarkImg} alt="" aria-hidden="true" />
                      <span>{currentEvent.indirizzo}</span>
                    </div>
                    <div className="flex space-x-2">
                      <img src={calendarImg} alt="" aria-hidden="true" />
                      <span>{currentEvent.data}</span>
                    </div>
                    <div className="flex space-x-2">
                      <img src={timeImg} alt="" aria-hidden="true" />
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
                    <Link to="/evento">
                      <button className="primary w-full lg:w-auto">Maggiori informazioni</button>
                    </Link>
                  </div>
                </section>
              </section>
            </section>
            {currentEvent.sponsors && (
              <>
                <div className="separator lg:max-w-[78.125rem] mx-auto mt-5 mb-10 lg:my-10"></div>
                <section className="flex flex-col items-center space-y-5 text-center">
                  <h3>Questo evento è sponsorizzato da</h3>
                  {currentEvent.sponsors.map((sponsor, i) => {
                    return (
                      <div
                        className="grid grid-cols-[auto_auto] items-center gap-x-2 md:gap-x-10"
                        key={i}
                      >
                        <div className="flex flex-col items-center">
                          <span className="font-semibold">{sponsor.nome}</span>
                          <span className="text-xs">{sponsor.testo}</span>
                          <span className="text-xs">{sponsor.indirizzo}</span>
                          <span className="text-xs">{sponsor.info}</span>
                        </div>
                        <img
                          className="w-full max-w-[80px] max-h-[80px]"
                          src={sponsorLogo}
                          alt="logo dello sponsor"
                        />
                      </div>
                    );
                  })}
                </section>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default MMap;
