import {React} from 'react';
import Contador from '../contador/contador';
import Straps from './straps.jpg';
import Suplemento from './suplemento.webp';
import EstilosCardImagen from '../componente-imagenes/imagen-componente.css'
import EstilosContador from '../contador/contador.css'
import EstilosAgregarCarrito from '../btn-agregar-carrito/btn-agregar-carrito.css'
import { Link } from 'react-router-dom';
function Contenedor() {
    return(
    <div className="Contenedor">
        <div className="Productos">
            <div className='imagen'>
                <img src="https://cdn.shopify.com/s/files/1/2137/4785/files/Pesas_Rusas_Gym_Box.jpg?v=1614811283&width=420" alt="Pesa Rusa"/>
                <div className="textoEncima">
                    <p>"Estas son unas pesas rusas de excelente calidad"</p>
                </div>
                <Contador stock={6} minimo={0} inicial={1}/>
                <Link to='/detalle/1'>
                    <button>Detalle del producto</button>   
                </Link>
            </div>
            <div className='imagen'>
                <img src='https://cdn.shopify.com/s/files/1/2137/4785/files/Straps.jpg?v=1638189332&width=420' alt="Straps"/>
                <div className="textoEncima">
                    <p>"Te presentamos estos straps para que tengas mejor agarre en tus ejercicios"</p>
                </div>
                <Contador stock={10} minimo={0} inicial={1}/>
                <Link to='/detalle/2'>
                    <button>Detalle del producto</button>   
                </Link>
            </div>
            <div className='imagen'>
                <img src='https://cdn.shopify.com/s/files/1/2137/4785/products/ENA_WHEY_PROTEIN.jpg?v=1559559448&width=420' alt='Suplemento'/>
                <div className="textoEncima">
                    <p>"Whey Protein para que llegues a tu proteina necesaria"</p>
                </div>
                <Contador stock={3} minimo={0} inicial={1}/>
                <Link to='/detalle/3'>
                    <button>Detalle del producto</button>   
                </Link>
            </div>
        </div>
    </div>
    )

}

export default Contenedor;