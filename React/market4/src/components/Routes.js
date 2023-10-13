// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './Header';
// import Accueil from '../pages/Accueil';
// import Banner from './Banner';
// //import Header from './Header';
// import Search from './Search';

// function Routes() {
//   return (
//     <Router>
//       <Banner />
//       <Header />
//       <Search />
//       <Switch>
//         <Route path="/" exact component={Accueil} />
//         {/* Ajoutez d'autres routes ici */}
//       </Switch>
//     </Router>
//   );
// }

// export default Routes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Accueil from '../pages/Accueil';
import About from '../pages/About';
import Sponsorises from '../pages/Sponsorises';
import Connexion from '../pages/Connexion';
import Inscription from '../pages/Inscription';
import AnnuaireProducteurs from '../pages/AnnuaireProducteurs';
import ConditionsGenerales from '../pages/ConditionsGenerales';
import Temoignages from '../pages/Temoignages';
import Banner from './Banner';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/pages-sponsorises" element={<Sponsorises />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/annuaire-producteurs" element={<AnnuaireProducteurs />} />
      <Route path="/conditions-generales" element={<ConditionsGenerales />} />
      <Route path="/temoignages" element={<Temoignages />} />
    </Routes>
  );
}

function RoutesConfig() {
  return (
    <>
      <Banner />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default RoutesConfig;



