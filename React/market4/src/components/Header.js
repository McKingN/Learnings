// import React from 'react';
// import '../styles/Header.css';

// function Header() {
//   return (
//     <div className="header-container">
//       <div className="button-group">
//         <button className="header-button">Accueil</button>
//         <button className="header-button">À propos</button>
//         <button className="header-button">Pages sponsorisées</button>
//         <div className="account-dropdown">
//           <button className="header-button account-button">Mon compte</button>
//           <div className="dropdown-content">
//             <a href="#">Connexion</a>
//             <a href="#">Inscription</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

//2
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="button-group">
        <Link to="/" className="header-button">Accueil</Link>
        <Link to="/a-propos" className="header-button">À propos</Link>
        <Link to="/pages-sponsorises" className="header-button">Pages sponsorisées</Link>
        <div className="account-dropdown">
          <button className="header-button account-button">Mon compte</button>
          <div className="dropdown-content">
            <Link to="/connexion">Connexion</Link>
            <Link to="/inscription">Inscription</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

