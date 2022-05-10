import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './componentes/navbar/navbar';
import Titulo from './componentes/titulo/Titulo';
import Footer from './componentes/footer/footer';
import Subtitulo from './componentes/subtitulos/subtitulo';
import Imagen from './componentes/componente-imagenes/imagen-componente';
import Rusa from './componentes/componente-imagenes/rusa.webp';
import Straps from './componentes/componente-imagenes/straps.jpg';
import Suplemento from './componentes/componente-imagenes/suplemento.webp';
import EstilosNavbar from './componentes/navbar/navbar.css';
import EstilosTitulo from './componentes/titulo/Titulo.css';
import EstilosSubtitulo from './componentes/subtitulos/subtitulo.css';
import EstilosCardImagen from './componentes/componente-imagenes/imagen-componente.css';
import EstilosFooter from './componentes/footer/footer.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Titulo titulo="Bienvenido a Perdomo Crossfit"/>
    <Subtitulo titulo="Algunos de nuestros productos mas vendidos"/>
    <div className='divImagenes'>
    <Imagen ruta={Rusa} alt="Pesa Rusa" descripcion="Estas son unas pesas rusas de excelente calidad"/>
    <Imagen ruta={Straps} alt="Straps" descripcion="Te presentamos estos straps para que tengas mejor agarre en tus ejercicios"/>
    <Imagen ruta={Suplemento} alt="Suplemento" descripcion="Whey Protein para que llegues a tu proteina necesaria"/>
    </div>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
