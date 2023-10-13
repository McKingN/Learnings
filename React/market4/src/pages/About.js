import React from 'react';
import '../styles/About.css';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <img src={Image1} alt="Image 1" className="about-image right" />
        <div className="about-text">
          <h2>Bienvenue sur AgribusinessT</h2>
          <p>La plateforme incontournable pour le secteur agroalimentaire. Notre marketplace révolutionnaire réunit l'ensemble des acteurs de cette industrie passionnante, offrant une opportunité unique de connecter, collaborer et prospérer.</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-text">
          <h2>Notre Vision</h2>
          <p>Chez AgribusinessT, nous croyons en la puissance de la communauté. Notre plateforme permet à chaque intervenant, qu'il s'agisse de producteurs, de distributeurs, de fournisseurs d'équipements, ou de professionnels du secteur, de partager leurs annonces et leurs offres avec une audience engagée et pertinente. Grâce à cette synergie, nous créons un écosystème dynamique où l'information circule librement, favorisant ainsi des opportunités d'affaires fructueuses.</p>
        </div>
        <img src={Image2} alt="Image 2" className="about-image left" />
      </div>
      <div className="about-section">
        <img src={Image3} alt="Image 3" className="about-image center" />
        <div className="about-text">
          <h2>Notre Objectif</h2>
          <p>Notre objectif est de simplifier et d'amplifier vos échanges commerciaux. AgribusinessT offre une interface conviviale et intuitive, facilitant la publication d'annonces et la recherche ciblée de partenaires commerciaux. Que vous cherchiez à acheter ou à vendre des produits agricoles, des équipements de transformation ou des services spécialisés, notre plateforme vous donne les moyens de trouver rapidement ce dont vous avez besoin.</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-text">
          <h2>Notre Engagement</h2>
          <p>Ce qui nous distingue, c'est notre engagement envers la qualité et la fiabilité. Chaque annonceur est soigneusement vérifié pour garantir que les informations partagées sont précises et légitimes. De plus, notre système de notation et de commentaires favorise la transparence et la confiance au sein de la communauté AgribusinessT.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
