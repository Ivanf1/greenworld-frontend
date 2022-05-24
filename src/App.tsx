import React from "react";
import "./App.css";
// import CandidaturaSponsor from "./pages/CandidaturaSponsor";
import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
// import SegnalazioneCard from "./components/SegnalazioneCard";
// import TestimonianzaCard from "./components/TestimonianzaCard";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidaturaSponsor from "./pages/CandidaturaSponsor";
import Testimonianze from "./pages/Testimonianze";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <CandidaturaSponsor></CandidaturaSponsor> */}
      {/* <TestimonianzaCard></TestimonianzaCard> */}
      {/* <SegnalazioneCard></SegnalazioneCard> */}
      <Routes>
        <Route path="/profilo" element={<Profile />} />
        <Route path="/candidatura-sponsor" element={<CandidaturaSponsor />} />
        <Route path="/testimonianze" element={<Testimonianze />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
