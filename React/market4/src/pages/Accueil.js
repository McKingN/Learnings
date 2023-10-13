import React from 'react';
import '../styles/Accueil.css';

function Accueil() {
  return (
    <div className="accueil-container">
      <div className="rubrique annonce-rubrique">
        <h2 className="rubrique-title">Les dernières annonces</h2>
        {/* Contenu des dernières annonces */}
      </div>
      <div className="rubrique theme-rubrique">
        <h2 className="rubrique-title">Les thèmes récurrents</h2>
        {/* Contenu des thèmes récurrents */}
      </div>
      <div className="rubrique membres-rubrique">
        <h2 className="rubrique-title">Les derniers membres</h2>
        {/* Contenu des derniers membres */}
      </div>
    </div>
  );
}

export default Accueil;
