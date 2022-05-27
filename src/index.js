import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EstilosNavbar from './componentes/navbar/navbar.css';
import EstilosTitulo from './componentes/titulo/Titulo.css';
import EstilosSubtitulo from './componentes/subtitulos/subtitulo.css';
import EstilosFooter from './componentes/footer/footer.css'


import EstilosContenedorObjetos from './componentes/contenedor/contenedor-objetos.css'

import Contenedor from './componentes/contenedor/contenedor-objetos';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
reportWebVitals();
