import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
              <Skills />
              <Projects />
              <Contact />
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
