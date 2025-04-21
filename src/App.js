import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Product from "./components/Product";
import Contact from "./components/Contact";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer"; // Import the Footer
import AdminPanel from "./components/AdminPanel"; // Import the Admin Panel

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route
          path="/"
          element={
            <div className="bg-light text-dark">
              <Navbar />
              <Hero />
              <About />
              <Skill />
              <Product />
              <PricingSection />
              <Contact />
              <Footer />
            </div>
          }
        />
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
