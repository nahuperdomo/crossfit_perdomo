import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EstilosNavbar from './componentes/navbar/navbar.css';
import EstilosTitulo from './componentes/titulo/Titulo.css';
import EstilosFooter from './componentes/footer/footer.css'
import getFirestoreApp from './firebase/config';
import EstilosContenedorObjetos from './componentes/contenedor/contenedor-objetos.css'
import Contenedor from './componentes/contenedor/contenedor-objetos';

getFirestoreApp();

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
reportWebVitals();
