import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import CandidaturaSponsor from "./pages/CandidaturaSponsor";
import Testimonianze from "./pages/Testimonianze";
import SegnalazioneLuogo from "./pages/SegnalazioneLuogo";
import InserimentoTestimonianza from "./pages/InserimentoTestimonianza";
import CreaEvento from "./pages/CreaEvento";
import Segnalazioni from "./pages/Segnalazioni";
import Home from "./pages/Home";
import DiventaOrganizzatore from "./pages/DiventaOrganizzatore";
import Evento from "./pages/Evento";
import { MotionConfig } from "framer-motion";
import smoothscroll from "smoothscroll-polyfill";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  smoothscroll.polyfill();

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/profilo" element={<Profile />} />
            <Route path="/candidatura-sponsor" element={<CandidaturaSponsor />} />
            <Route path="/segnala" element={<SegnalazioneLuogo />} />
            <Route path="/segnalazioni" element={<Segnalazioni />} />
            <Route path="/crea-evento" element={<CreaEvento />} />
            <Route path="/testimonia" element={<InserimentoTestimonianza />} />
            <Route path="/testimonianze" element={<Testimonianze />} />
            <Route path="/organizzatore" element={<DiventaOrganizzatore />} />
            <Route path="/evento" element={<Evento />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
