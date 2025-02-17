import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import AllDestinations from "./pages/AllDestinations";
import ScrollToTop from "./components/ScrollToTop";
import DestinationDetails from "./pages/DestinationDetails";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import PlaneAnimation from "./components/PlaneAnimation";
import SoundToggle from "./components/SoundToggle";

const AppContent = () => {
  const handleSoundToggle = (isMuted) => {
    const audio = document.querySelector("audio");
    if (audio) {
      audio.muted = isMuted;
    }
  };

  return (
    <div className="relative">
      <PlaneAnimation />
      <div className="relative z-10">
        <ScrollToTop />
        <Toaster />
        <Navbar />
        <div className="pt-10">
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <div id="home">
                    <Home />
                  </div>
                  <div id="stats">
                    <Stats />
                  </div>
                  <div id="destination">
                    <Destination />
                  </div>
                  <div id="features">
                    <Features />
                  </div>
                  <div id="about">
                    <About />
                  </div>
                  <div id="testimonials">
                    <Testimonials />
                  </div>
                  <div id="contact">
                    <Contact />
                  </div>
                </main>
              }
            />
            <Route path="/destinations" element={<AllDestinations />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <SoundToggle onToggle={handleSoundToggle} />
    </div>
  );
};

export default AppContent;
