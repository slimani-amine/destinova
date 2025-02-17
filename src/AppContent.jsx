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
const AppContent = () => {
  return (
    <div className="pt-20">
      <ScrollToTop />
      <Toaster />
      <Navbar />

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
              <div id="features">
                <Features />
              </div>
              <div id="destination">
                <Destination />
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

      <Footer />
    </div>
  );
};

export default AppContent; 