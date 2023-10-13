import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/logo.png'; // Remplacez 'logo.png' par le chemin de votre logo

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="left">
          <img src={logo} alt="Logo de l'entreprise" className="logo" />
          <h2 className="company-name">AgribusinessT</h2>
        </div>
        <div className="right">
          <p className="tagline">Pour tous types d'échanges dans le milieu de l'agroalimentaire.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
