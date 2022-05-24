import React from "react";
import "./App.css";
import CandidaturaSponsor from "./CandidaturaSponsor";
import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
import SegnalazioneCard from "./components/SegnalazioneCard";
import TestimonianzaCard from "./components/TestimonianzaCard";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <CandidaturaSponsor></CandidaturaSponsor> */}
      {/* <TestimonianzaCard></TestimonianzaCard> */}
      {/* <SegnalazioneCard></SegnalazioneCard> */}
      <Profile></Profile>
    </div>
  );
}

export default App;
