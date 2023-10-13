import React from 'react';
import '../styles/Sponsorises.css'; // Assurez-vous d'ajuster le chemin si nécessaire

function Sponsorises() {
  const companies = [
    'Entreprise 1',
    'Entreprise 2',
    'Entreprise 3',
    'Entreprise 4',
    'Entreprise 5',
    'Entreprise 6',
    // Ajoutez plus d'entreprises ici si nécessaire
  ];

  return (
    <div className="sponsorises-page">
      <h1>Pages Sponsorisées</h1>
      <p>Les pages sponsorisées s'affichent ici.</p>

      <div className="company-grid">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsorises;

