// import React from 'react';
// import Banner from './Banner';
// import Header from './Header';
// import Search from './Search';
// import Accueil from '../pages/Accueil';
// import BackgroundImages from './BackgroundImages';
// import Footer from './Footer';
// import About from '../pages/About';



// function App() {
//   return (
//     <div>
      
//       <BackgroundImages />
//       <Banner />
//       <Header />
//       <Search />
//       <Accueil />
//       <Footer />
//       {/* <About /> */}
      
//       {/* Autres éléments de votre application */}
//     </div>
//   );
// }

// export default App;


//2

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // N'importe que BrowserRouter
//import './styles/App.css'; // Assurez-vous d'ajuster le chemin si nécessaire

import RoutesConfig from './Routes'; // Importez le fichier RoutesConfig ici

function App() {
  return (
    <Router>
      <RoutesConfig />
    </Router>
  );
}

export default App;

