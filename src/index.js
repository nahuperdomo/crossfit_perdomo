import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './componentes/navbar/navbar';
import Titulo from './componentes/titulo/Titulo';
import Footer from './componentes/footer/footer';
import Subtitulo from './componentes/subtitulos/subtitulo';
import EstilosNavbar from './componentes/navbar/navbar.css';
import EstilosTitulo from './componentes/titulo/Titulo.css';
import EstilosSubtitulo from './componentes/subtitulos/subtitulo.css';
import EstilosFooter from './componentes/footer/footer.css'
import Item from './componentes/Item/Item'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailConainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import EstilosContenedorObjetos from './componentes/contenedor/contenedor-objetos.css'
import { BrowserRouter, Navigate, Route, Routes }from 'react-router-dom'
import Contenedor from './componentes/contenedor/contenedor-objetos';
import Detalle from './componentes/detalleProducto/detalle'
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
reportWebVitals();
