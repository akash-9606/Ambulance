import React from 'react';
import Navbar from '../components/navbar';
import FooterSection from '../components/footer';
import bannerPage from "../images/Landing.png";
import AmbulanceScene from '../components/AmbulanceAnimation';
import Testimonial from '../components/Testimonials';
import Hero from '../components/hero';
import App from '../components/animation';
import "../styles/landing.css"; 

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div className="landing-wrapper">
        <div className="banner-container">
          <div className="banner-text">
            <h1>Smart Ambulance Booking</h1>
            <p>Get emergency medical help at your fingertips. Fast, smart, and life-saving!</p>
            <button>🚑 Request Now</button>
          </div>
          <img src={bannerPage} alt="Landing Banner" className="banner-image" />
        </div>
      </div>

      <Hero />
      <App />
      <AmbulanceScene />
      <Testimonial />
      <FooterSection />
    </>
  );
}

export default LandingPage;
