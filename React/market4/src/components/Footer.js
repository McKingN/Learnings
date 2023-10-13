// import React from 'react';
// import '../styles/Footer.css';
// import { Link } from 'react-router-dom';

// import FacebookLogo from '../assets/facebook-logo.png'; // Importez vos images
// import LinkedInLogo from '../assets/linkedin-logo.png';
// import WhatsAppLogo from '../assets/whatsapp-logo.png';

// // require('react-dom');
// // window.React2 = require('react');
// // console.log(window.React1 === window.React2);

// function Footer() {
//   return (
//     <footer className="footer-container">
//       <div className="footer-row">
//         <div className="left">
//           <Link to="/membres" className="footer-link">Accès espace membres</Link>
//           {/* Désactiver l'avertissement pour le lien vide */}
//           {/* eslint-disable-next-line */}
//           <a href="#" className="footer-link">Espace publicitaire</a>
//           <Link to="/inscription" className="footer-link">Inscription</Link>
//           {/* Désactiver l'avertissement pour le lien vide */}
//           {/* eslint-disable-next-line */}
//           <a href="#" className="footer-link">Les journaux AgribusinessT</a>
//         </div>
//         <div className="middle">
//           <p className="rubrique">Nous contacter</p>
//           <div className="social-icons">
//             <a href='https://www.facebook.com/regis.young.180' target="_blank" rel="noopener noreferrer">
//               <img src={FacebookLogo} alt="Facebook" />
//             </a>
//             <a href='https://www.linkedin.com/in/r%C3%A9gis-kplogu%C3%A9d%C3%A9-71905887/' target="_blank" rel="noopener noreferrer">
//               <img src={LinkedInLogo} alt="LinkedIn" />
//             </a>
//             <a href='https://wa.me/212663808747' target="_blank" rel="noopener noreferrer">
//               <img src={WhatsAppLogo} alt="WhatsApp" />
//             </a>
//           </div>
//         </div>
//         <div className="right">
//            {/* eslint-disable-next-line */}
//           <a href="#" className="footer-link">Annuaire producteurs et grossistes</a>
//            {/* eslint-disable-next-line */}
//           <a href="#" className="footer-link">Conditions générales et info</a>
//            {/* eslint-disable-next-line */}
//           <a href="#" className="footer-link">Témoignages</a>
//           <Link to="/apropos" className="footer-link">À propos d'AgribusinessT</Link>
//         </div>
//       </div>
//       <div className="footer-copyright">
//         © 2023 Jupiter & Choubel SARL - Tous droits réservés
//       </div>
//     </footer>
//   );
// }

// export default  Footer;

//2

// import React from 'react';
// import '../styles/Footer.css';
// import { Link } from 'react-router-dom';

import FacebookLogo from '../assets/facebook-logo.png'; // Importez vos images
import LinkedInLogo from '../assets/linkedin-logo.png';
import WhatsAppLogo from '../assets/whatsapp-logo.png';

// function Footer() {
//   return (
//     <footer className="footer-container">
//       <div className="footer-row">
//         <div className="left">
//           <div className="footer-link-block">
//             <Link to="/membres" className="footer-link">Accès espace membres</Link>
//           </div>
//           <div className="footer-link-block">
//             <a href="#" className="footer-link">Espace publicitaire</a>
//           </div>
//           <div className="footer-link-block">
//             <Link to="/inscription" className="footer-link">Inscription</Link>
//           </div>
//           <div className="footer-link-block">
//             <a href="#" className="footer-link">Les journaux AgribusinessT</a>
//           </div>
//         </div>
//         <div className="middle">
//           <p className="rubrique">Nous contacter</p>
//           <div className="social-icons">
//             <a href='https://www.facebook.com/regis.young.180' target="_blank" rel="noopener noreferrer">
//               <img src={FacebookLogo} alt="Facebook" className="social-icon" />
//             </a>
//             <a href='https://www.linkedin.com/in/r%C3%A9gis-kplogu%C3%A9d%C3%A9-71905887/' target="_blank" rel="noopener noreferrer">
//               <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
//             </a>
//             <a href='https://wa.me/212663808747' target="_blank" rel="noopener noreferrer">
//               <img src={WhatsAppLogo} alt="WhatsApp" className="social-icon" />
//             </a>
//           </div>
//         </div>
//         <div className="right">
//           <div className="footer-link-block">
//             <a href="#" className="footer-link">Annuaire producteurs et grossistes</a>
//           </div>
//           <div className="footer-link-block">
//             <a href="#" className="footer-link">Conditions générales et info</a>
//           </div>
//           <div className="footer-link-block">
//             <a href="#" className="footer-link">Témoignages</a>
//           </div>
//           <div className="footer-link-block">
//             <Link to="/apropos" className="footer-link">À propos d'AgribusinessT</Link>
//           </div>
//         </div>
//       </div>
//       <div className="footer-copyright">
//         © 2023 Jupiter & Choubel SARL - Tous droits réservés
//       </div>
//     </footer>
//   );
// }

// export default Footer;

//3
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-row">
        <div className="left">
          <div className="footer-link-block">
            <Link to="/membres" className="footer-link">Accès espace membres</Link>
          </div>
          <div className="footer-link-block">
            <Link to="/espace-publicitaire" className="footer-link">Espace publicitaire</Link>
          </div>
          <div className="footer-link-block">
            <Link to="/inscription" className="footer-link">Inscription</Link>
          </div>
          <div className="footer-link-block">
            <Link to="/journaux-agribusinessT" className="footer-link">Les journaux AgribusinessT</Link>
          </div>
        </div>
        <div className="middle">
          <p className="rubrique">Nous contacter</p>
          <div className="social-icons">
            <a href='https://www.facebook.com/regis.young.180' target="_blank" rel="noopener noreferrer">
              <img src={FacebookLogo} alt="Facebook" className="social-icon" />
            </a>
            <a href='https://www.linkedin.com/in/r%C3%A9gis-kplogu%C3%A9d%C3%A9-71905887/' target="_blank" rel="noopener noreferrer">
              <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
            </a>
            <a href='https://wa.me/212663808747' target="_blank" rel="noopener noreferrer">
              <img src={WhatsAppLogo} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="footer-link-block">
            <Link to="/annuaire-producteurs" className="footer-link">Annuaire producteurs et grossistes</Link>
          </div>
          <div className="footer-link-block">
            <Link to="/conditions-generales" className="footer-link">Conditions générales et info</Link>
          </div>
          <div className="footer-link-block">
            <Link to="/temoignages" className="footer-link">Témoignages</Link>
          </div>
          <div className="footer-link-block">
            <Link to="/a-propos" className="footer-link">À propos d'AgribusinessT</Link>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © 2023 Jupiter & Choubel SARL - Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;


