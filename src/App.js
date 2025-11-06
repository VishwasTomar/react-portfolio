import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import profilePhoto from "./vishwas.jpg";
import SmoothScroll from "./utils/SmoothScroll";
import DarkModeToggle from "./components/DarkModeToggle";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <SmoothScroll />
      <DarkModeToggle />
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section id="home" className="hero-section">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-greeting">Hello, I'm</h1>
            <h1 className="hero-name typewriter">VISHWAS TOMAR</h1>
            
            <div className="hero-titles">
              <span className="title-item">Software Engineer</span>
              <span className="title-divider">•</span>
              <span className="title-item">Java Developer</span>
              <span className="title-divider">•</span>
              <span className="title-item">Graduate Student</span>
            </div>
            
            <p className="hero-description">
                Building scalable systems with Java and AI. Master's complete. 
                Ready for new challenges in Canada.
            </p>
            
            <div className="hero-buttons">
              <a href="#experience" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          
          <div className="hero-image">
            <img src={profilePhoto} alt="Vishwas Tomar" className="profile-photo" />
          </div>
        </div>
      </section>

      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;