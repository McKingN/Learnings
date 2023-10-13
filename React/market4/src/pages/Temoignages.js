import React from 'react';
import '../styles/Temoignages.css'; // Assurez-vous d'ajuster le chemin si nécessaire

import UserIcon from '../assets/user-icon.png'; // Importez l'icône d'utilisateur

function Temoignages() {
  const testimonials = [
    {
      name: "Lucie B., Productrice de Fruits Biologiques",
      testimonial: "AgribusinessT a transformé la façon dont je fais des affaires. Grâce à leur plateforme conviviale, j'ai pu trouver rapidement des acheteurs sérieux pour mes fruits biologiques. C'est incroyable de voir comment une simple annonce peut susciter autant d'intérêt et ouvrir de nouvelles opportunités."
    },
    {
      name: "Alexandre G., Distributeur de Produits Agroalimentaires",
      testimonial: "En tant que distributeur, trouver de nouveaux fournisseurs de confiance était toujours un défi. AgribusinessT a résolu ce problème en me permettant d'accéder à une liste diversifiée de producteurs et de transformateurs. J'ai pu élargir mon catalogue de produits et offrir à mes clients une variété encore plus grande."
    },
    {
      name: "Sophie L., Experte en Transformation Alimentaire",
      testimonial: "Je cherchais depuis longtemps à promouvoir mes services de transformation alimentaire. AgribusinessT m'a donné la visibilité dont j'avais besoin. Grâce à leur plateforme, j'ai pu me connecter avec des producteurs qui avaient besoin de mes compétences. C'est une situation gagnant-gagnant que je n'aurais jamais imaginée sans AgribusinessT."
    },
    {
      name: "Pierre M., Fournisseur d'Équipements Agricoles",
      testimonial: "Mon entreprise d'équipements agricoles cherchait à toucher un public plus large. AgribusinessT a été le partenaire idéal pour atteindre cet objectif. J'ai pu présenter mes dernières innovations à des agriculteurs et des professionnels de l'agroalimentaire, ce qui a stimulé nos ventes et notre croissance."
    },
    {
      name: "Marie C., Passionnée d'Agriculture Urbaine",
      testimonial: "En tant qu'adepte de l'agriculture urbaine, je cherchais des semences et des ressources spécifiques pour mes projets. AgribusinessT s'est avéré être une mine d'or pour moi. J'ai pu découvrir des fournisseurs uniques et des conseils précieux auprès d'autres passionnés. C'est devenu mon lieu de prédilection pour tout ce qui concerne l'agroalimentaire."
    },
  ];

  return (
    <div className="temoignages-page">
      <h1>Témoignages AgribusinessT</h1>
      <p>Rejoignez AgribusinessT dès aujourd'hui et faites partie de ces histoires à succès. Notre plateforme vous offre la possibilité de connecter, de collaborer et de prospérer dans le secteur agroalimentaire. Votre témoignage pourrait être le prochain à inspirer d'autres professionnels passionnés !</p>

      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="user-icon">
              <img src={UserIcon} alt="User Icon" />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Temoignages;
