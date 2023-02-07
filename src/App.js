import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
