import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Inscription.css';

function Inscription() {
  const [formData, setFormData] = useState({
    nomComplet: '',
    email: '',
    motDePasse: '',
    typeUtilisateur: '',
    nomEntreprise: '',
    secteurActivite: '',
    paysRegion: '',
    telephone: '',
    adressePostale: '',
    presentationEntreprise: '',
    logo: '',
    liensMediasSociaux: '',
    preferencesCommunication: [],
    acceptConditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données d'inscription
    console.log(formData);
  };

  return (
    <div className="inscription-container">
      <h1>Inscription sur AgribusinessT</h1>
      <form onSubmit={handleSubmit}>
        {/* Informations de base */}
        <div className="form-field">
          <label>Nom complet</label>
          <input type="text" name="nomComplet" value={formData.nomComplet} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label>Adresse e-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label>Mot de passe sécurisé</label>
          <input type="password" name="motDePasse" value={formData.motDePasse} onChange={handleChange} required />
        </div>

        {/* Type d'utilisateur */}
        <div className="form-field">
          <label>Type d'utilisateur</label>
          <select name="typeUtilisateur" value={formData.typeUtilisateur} onChange={handleChange} required>
            <option value="">Sélectionner</option>
            <option value="Producteur">Producteur</option>
            <option value="Distributeur">Distributeur</option>
            <option value="Fournisseur">Fournisseur d'équipements</option>
            <option value="Transformateur">Transformateur</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        {/* Informations professionnelles */}
        <div className="form-field">
          <label>Nom de l'entreprise ou de l'exploitation</label>
          <input type="text" name="nomEntreprise" value={formData.nomEntreprise} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label>Secteur d'activité</label>
          <input type="text" name="secteurActivite" value={formData.secteurActivite} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label>Pays ou région d'activité</label>
          <input type="text" name="paysRegion" value={formData.paysRegion} onChange={handleChange} required />
        </div>

        {/* Coordonnées */}
        <div className="form-field">
          <label>Numéro de téléphone professionnel</label>
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label>Adresse postale de l'entreprise</label>
          <input type="text" name="adressePostale" value={formData.adressePostale} onChange={handleChange} />
        </div>

        {/* Description de l'entreprise */}
        <div className="form-field">
          <label>Brève présentation de l'entreprise</label>
          <textarea name="presentationEntreprise" value={formData.presentationEntreprise} onChange={handleChange} required />
        </div>

        {/* Photo de profil */}
        <div className="form-field">
          <label>Logo de l'entreprise ou photo personnelle</label>
          <input type="file" name="logo" onChange={handleChange} />
        </div>

        {/* Liens vers les médias sociaux */}
        <div className="form-field">
          <label>Liens vers les médias sociaux (optionnels)</label>
          <input type="text" name="liensMediasSociaux" value={formData.liensMediasSociaux} onChange={handleChange} />
        </div>

        {/* Préférences de communication */}
        <div className="form-field">
          <label>Préférences de communication</label>
          <div className="checkbox-field">
            <label>
              <input type="checkbox" name="preferencesCommunication" value="Email" onChange={handleChange} />
              Recevoir des notifications par e-mail
            </label>
          </div>
          <div className="checkbox-field">
            <label>
              <input type="checkbox" name="preferencesCommunication" value="Push" onChange={handleChange} />
              Recevoir des notifications push
            </label>
          </div>
        </div>

        {/* Conditions d'utilisation et politique de confidentialité */}
        <div className="checkbox-field">
          <label>
            <input type="checkbox" name="acceptConditions" onChange={handleChange} required />
            J'accepte les <Link to="/conditions-generales">conditions générales</Link> et la politique de confidentialité.
          </label>
        </div>

        {/* Bouton de validation */}
        <div className="button-container">
          <button type="submit">Valider mon inscription</button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
