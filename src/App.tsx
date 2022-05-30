import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import CandidaturaSponsor from "./pages/CandidaturaSponsor";
// import Carousel from "./components/Carousel";
// import SegnalazioneCard from "./components/SegnalazioneCard";
// import TestimonianzaCard from "./components/TestimonianzaCard";
import Profile from "./pages/Profile";
import CandidaturaSponsor from "./pages/CandidaturaSponsor";
import Testimonianze from "./pages/Testimonianze";
import SegnalazioneLuogo from "./pages/SegnalazioneLuogo";
import InserimentoTestimonianza from "./pages/InserimentoTestimonianza";
import CreaEvento from "./pages/CreaEvento";
import Segnalazioni from "./pages/Segnalazioni";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/profilo" element={<Profile />} />
        <Route path="/candidatura-sponsor" element={<CandidaturaSponsor />} />
        <Route path="/segnala" element={<SegnalazioneLuogo />} />
        <Route path="/segnalazioni" element={<Segnalazioni />} />
        <Route path="/crea-evento" element={<CreaEvento />} />
        <Route path="/testimonia" element={<InserimentoTestimonianza />} />
        <Route path="/testimonianze" element={<Testimonianze />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
