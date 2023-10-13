// Connexion.js

import React from 'react';
import '../styles/Connexion.css'

function Connexion() {
  return (
    <div className="connexion-container">
      <h1>Connexion</h1>
      <form>
        <div className="form-field">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="button-container">
          <button type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  );
}

export default Connexion;
