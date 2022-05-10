import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './componentes/navbar/navbar';
import Titulo from './componentes/titulo/Titulo';
import Footer from './componentes/footer/footer';
import AgregarCarrito from './componentes/btn-agregar-carrito/btn-agregar-carrito';
import Contador from './componentes/contador/contador';
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
import EstilosContador from './componentes/contador/contador.css'
import EstilosAgregarCarrito from './componentes/btn-agregar-carrito/btn-agregar-carrito.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Titulo titulo="Bienvenido a Perdomo Crossfit"/>
    <Subtitulo titulo="Algunos de nuestros productos mas vendidos"/>
    <div className='divImagenes'>
      <div className='imagen1'>
      <Imagen ruta={Rusa} alt="Pesa Rusa" descripcion="Estas son unas pesas rusas de excelente calidad"/>
      <Contador stock={6} minimo={0} inicial={1}/>
      </div>
      <div className='imagen2'>
        <Imagen ruta={Straps} alt="Straps" descripcion="Te presentamos estos straps para que tengas mejor agarre en tus ejercicios"/>
        <Contador stock={10} minimo={0} inicial={1}/>
      </div>
      <div className='imagen3'> 
        <Imagen ruta={Suplemento} alt="Suplemento" descripcion="Whey Protein para que llegues a tu proteina necesaria"/>
        <Contador stock={3} minimo={0} inicial={1}/>
      </div>
    </div>
    <div className='divBtnAgregar'>
    <AgregarCarrito/>
    </div>
    
  </React.StrictMode>
);
reportWebVitals();
