import {Link} from 'react-router-dom';

import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
function Navbar(props) {
  const {cartItems, cantidadItem} = useContext(CartContext);
    return (
      <div className="Navbar">
        <ul className="navbar mb-5">
            <Link to='/accesorios'>
              <li>Accesorios</li>
            </Link>
            <Link to='/suplementos'>
              <li>Suplementacion</li>
            </Link>
            <Link to='/'>
              <li>Tienda</li>
            </Link>
            <Link to='/carrito'>
              <div className='d-flex'>
                <li>Carrito <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" className="carritoIcon" alt="carrito compras"/></li>
                <p className='bg-primary rounded-circle w-25 h-25 d-flex justify-content-center'>{cantidadItem() > 0 ? <span className="cantidad">{cantidadItem()}</span> : null}</p> 
              </div>
            </Link>
        </ul>
      </div>
    );
  }

  export default Navbar;