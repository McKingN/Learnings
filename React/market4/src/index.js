// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
//import App from './components/App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//2

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import RoutesConfig from './components/Routes'; // Importez le composant RoutesConfig
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App /> {/* Utilisez le composant RoutesConfig */}
//   </React.StrictMode>
// );

//3

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './components/App';
// import reportWebVitals from './reportWebVitals';

// window.React1 = require('react');


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

//4

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter

// import './index.css';
// import App from './components/App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <BrowserRouter> {/* Ajoutez le BrowserRouter ici */}
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>,
// );


//5

// import React from 'react';
// import ReactDOM from 'react-dom';
// //import './styles/index.css'; // Assurez-vous d'ajuster le chemin si nécessaire

// import App from './components/App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//6
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './components/Routes'; // Import the main routing component
import Background from './components/Background';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Background />
      <RoutesConfig /> {/* Render the main routing component */}
    </React.StrictMode>
  </BrowserRouter>,
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
